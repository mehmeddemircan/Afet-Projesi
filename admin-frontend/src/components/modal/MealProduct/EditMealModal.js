import { Modal, message } from "antd";
import React, { useState } from "react";
import AddEditMealForm from "../../form/AddEditMealForm";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { useDispatch } from "react-redux";
import { UpdateMealProduct } from "../../../redux/actions/MealActions";
import { useParams } from "react-router-dom";
const EditMealModal = ({
  item,
  handleCloseEditMealModal,
  showEditMealModal,
}) => {

  const {brandId} = useParams()

  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [brand, setBrand] = useState(`${brandId}`)
  const [stock, setStock] = useState(item.stock);
  const [image, setImage] = useState(item.image);
  const [imageLength, setImageLength] = useState(item.imageLength);
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

  const dispatch = useDispatch()
  const handleEditMealProduct = () => {
    dispatch(UpdateMealProduct(item._id,{ title, price, brand, stock, image }))
    handleCloseEditMealModal()

  }

  return (
    <Modal
      title="Edit Meal Modal"
      centered
      open={showEditMealModal}
      onOk={handleEditMealProduct}
      onCancel={handleCloseEditMealModal}
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

export default EditMealModal;
