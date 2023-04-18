import { Modal, message, Upload, Form, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Resizer from "react-image-file-resizer";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
import { AddMeal } from "../../../redux/actions/MealActions";
import AddEditMealForm from "../../form/AddEditMealForm";
const AddMealModal = ({ handleCloseAddMealModal, showAddMealModal }) => {
  const { brandId } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState(`${brandId}`);

  const [stock, setStock] = useState(0);
  const [image, setImage] = useState("");

  const [imageLength, setImageLength] = useState(0);

  const dispatch = useDispatch();
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const uploadProps = {
    beforeUpload: (file) => {
      return new Promise((resolve, reject) => {
        // Resize the image
        Resizer.imageFileResizer(
          file,
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            // Send the resized image to the server
            axios
              .post("https://afetapi.onrender.com/api/uploadimages", {
                image: uri,
              })
              .then((response) => {
                // Call the onFinish callback with the uploaded image URL
                // onFinish(response.data.url);
                setImage(response.data.url);
                setImageLength(1);
                resolve(false); // prevent default antd upload behavior
              })
              .catch((error) => {
                reject(error);
              });
          },
          "base64"
        );
      });
    },
    onChange: (info) => {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleAddMeal = () => {
    dispatch(AddMeal({ title, price, brand, stock, image }));
    handleCloseAddMealModal();
    setImage("");
    setImageLength(0);
  };

  return (
    <Modal
      title="Add Meal Modal"
      centered
      open={showAddMealModal}
      onOk={handleAddMeal}
      onCancel={handleCloseAddMealModal}
    >
      <AddEditMealForm
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        stock={stock}
        setStock={setStock}
        image={image}
        setImage={setImage}
        uploadProps={uploadProps}
        onPreview={onPreview}
        imageLength={imageLength}
        setImageLength={setImageLength}
      />
    </Modal>
  );
};

export default AddMealModal;
