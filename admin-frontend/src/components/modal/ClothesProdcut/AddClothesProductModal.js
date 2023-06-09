import { Modal, Upload, message } from "antd";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Resizer from "react-image-file-resizer";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
import { AddClothes } from "../../../redux/actions/ClothesAction";
import { useParams } from "react-router-dom";
import AddEditClothesForm from "../../form/AddEditClothesForm";
const AddClothesProductModal = ({
  handleCloseAddProductModal,
  showAddProductModal,
}) => {
  const { brandId } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState(`${brandId}`);

  const [genders, setGenders] = useState(["Erkek", "Kadın", "Unisex"]);
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [gender, setGender] = useState("");

  const handleSelectGender = (value) => {
    setGender(value);
  };

  const dispatch = useDispatch();

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
      const { status, response } = info.file;
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

  const handleAddNewClothes = () => {
    dispatch(AddClothes({ title, price, brand, gender, stock, images }));
    handleCloseAddProductModal();
    setImages([]);
  };

  return (
    <Fragment>
      <Modal
        centered
        open={showAddProductModal}
        onOk={handleAddNewClothes}
        onCancel={handleCloseAddProductModal}
      >
       
        <AddEditClothesForm
          title={title}
          setTitle={setTitle}
          handleSelectGender={handleSelectGender}
          genders={genders}
          price={price}
          setPrice={setPrice}
          stock={stock}
          setStock={setStock}
          handleRemoveImage={handleRemoveImage}
          gender={gender}
          images={images}
          fileList={fileList}
          uploadProps={uploadProps}
          onPreview={onPreview}
          onChange={onChange}
        />
      </Modal>
    </Fragment>
  );
};

export default AddClothesProductModal;
