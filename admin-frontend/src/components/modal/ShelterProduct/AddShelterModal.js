import { Form, Input, Modal, Select, message, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React from "react";
import { useState } from "react";
import Resizer from "react-image-file-resizer";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddShelter } from "../../../redux/actions/ShelterActions";
import AddEditShelterForm from "../../form/AddEditShelterForm";
const { Option } = Select;
const AddShelterModal = ({
  showAddShelterModal,
  handleCloseAddShelterModal,
}) => {
  const { brandId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState(`${brandId}`);
  const [categories, setCategories] = useState(["Ev", "Hotel"]);
  const [category, setCategory] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]);
  const [fileList, setFileList] = useState([])
  const handleSelectCategory = (value) => {
    setCategory(value);
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
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
                setImages([...images, response.data.url]);

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

  const handleRemoveImage = (file) => {
    const url = file.url || (file.response && file.response.url);
    const filteredImages = images.filter((image) => image !== url);
    setImages(filteredImages);
    message.success(`${file.response.url} removed successfully.`);
  };
  const dispatch = useDispatch();
  const handleAddShelter = () => {
    dispatch(
      AddShelter({
        title,
        description,
        brand,
        category,
        price,
        stock,
        images,
        roomNumber,
      })
    );
    handleCloseAddShelterModal();
    setImages([]);
  };

  return (
    <Modal
      title="Add Shelter"
      centered
      open={showAddShelterModal}
      onOk={handleAddShelter}
      onCancel={handleCloseAddShelterModal}
    >
      <AddEditShelterForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        categories={categories}
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
        stock={stock}
        setStock={setStock}
        roomNumber={roomNumber}
        setRoomNumber={setRoomNumber}
        handleSelectCategory={handleSelectCategory}
        handleRemoveImage={handleRemoveImage}
        images={images}
        fileList={fileList}
        uploadProps={uploadProps}
        onPreview={onPreview}
        onChange={onChange}
      />
    </Modal>
  );
};

export default AddShelterModal;
