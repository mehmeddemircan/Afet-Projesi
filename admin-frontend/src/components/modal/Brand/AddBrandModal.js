import { Button, Modal, Upload, message } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Resizer from "react-image-file-resizer";
import { AddBrand } from "../../../redux/actions/BrandActions";
import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
const AddBrandModal = ({ handleCloseAddBrandModal, showAddBrandModal }) => {

  
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);

  const [image, setImage] = useState("");

  const [imageList, setImageList] = useState([]);

  const onFinish = (imageUrl) => {
    setImageList([...imageList, imageUrl]);
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
                onFinish(response.data.url);
                setImage(response.data.url);
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

  const dispatch = useDispatch();

  const handleAddBrand = () => {
    dispatch(AddBrand({ name, image }));
    handleCloseAddBrandModal();
    setImageList([]);
  };

  return (
    <Modal
      centered
      open={showAddBrandModal}
      onOk={handleAddBrand}
      onCancel={handleCloseAddBrandModal}
    >
      <form>
        <div class="form-group">
          <h4 class="text-center">New Brand  </h4>
          <label for="recipient-name" class="col-form-label">
            Brand Name
          </label>
          <input
            type="text"
            class="form-control "
            id="person-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div class="my-3">
          <label for="formFile" class="form-label">
            Default file input example
          </label>
          <ImgCrop rotationSlider>
            <Upload {...uploadProps} listType="picture-card">
              {imageList.length < 1 && (
                <CameraFilled style={{ fontSize: 30 }} />
              )}
            </Upload>
          </ImgCrop>
        </div>
      </form>
    </Modal>
  );
};

export default AddBrandModal;
