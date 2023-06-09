import { Modal, Upload, message } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Resizer from "react-image-file-resizer";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
import AddEditClothesForm from "../../form/AddEditClothesForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UpdateClotheProduct } from "../../../redux/actions/ClothesAction";
const EditClothesProductModal = ({
  item,
  handleCloseEditClothesModal,
  showEditClothesModal,
}) => {
  const { brandId } = useParams();
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [brand, setBrand] = useState(`${brandId}`);

  const [genders, setGenders] = useState(["Erkek", "Kadın", "Unisex"]);
  const [stock, setStock] = useState(item.stock);
  const urlsOfItem = item.images.map((image) => image.url);
  const [images, setImages] = useState(urlsOfItem);
  const [fileList, setFileList] = useState(item.images);
  const [gender, setGender] = useState(item.gender);

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
      // setImages(info.fileList);
    },
  };

  const handleRemoveImage = (public_id) => {
    console.log("remove img", public_id);

    let filteredImages = item.images.filter((item) => {
      return item.public_id !== public_id;
    });
    const urlsOfItem = filteredImages.map((image) => image.url);
    setImages(urlsOfItem);
    message.success("Successfully removed from list");
  };
  const dispatch = useDispatch();
  const handleEditClotheProduct = () => {
    dispatch(
      UpdateClotheProduct(item._id, {
        title,
        price,
        brand,
        gender,
        stock,
        images,
      })
    );
    handleCloseEditClothesModal();
   
  };

  return (
    <Modal
      title="Edit Clothes Product"
      centered
      open={showEditClothesModal}
      onOk={handleEditClotheProduct}
      onCancel={handleCloseEditClothesModal}
    >
    
      <AddEditClothesForm
        title={title}
        setTitle={setTitle}
        // handleSelectGender={handleSelectGender}
        genders={genders}
        price={price}
        setPrice={setPrice}
        stock={stock}
        setStock={setStock}
        handleRemoveImage={handleRemoveImage}
        gender={gender}
        images={images}
        uploadProps={uploadProps}
        onPreview={onPreview}
        onChange={onChange}
        fileList={fileList}
      />
    </Modal>
  );
};

export default EditClothesProductModal;
