import { Modal, message, Upload } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Resizer from "react-image-file-resizer";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
import { AddMeal } from "../../../redux/actions/MealActions";
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
      centered
      open={showAddMealModal}
      onOk={handleAddMeal}
      onCancel={handleCloseAddMealModal}
    >
      <form>
        <div class="form-group">
          <h4 class="text-center">New Title </h4>
          <label for="recipient-name" class="col-form-label">
            Meal Title
          </label>
          <input
            type="text"
            class="form-control "
            id="person-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label for="recipient-name" class="col-form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control "
            id="person-name"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label for="recipient-name" class="col-form-label">
            Stock
          </label>
          <input
            type="number"
            class="form-control "
            id="person-name"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div class="my-3">
          <label for="formFile" class="form-label">
            Default file input example
          </label>
          <ImgCrop rotationSlider>
            <Upload
              {...uploadProps}
              onPreview={onPreview}
              onRemove={() => setImageLength(0)}
              listType="picture-card"
            >
              {imageLength === 0 && <CameraFilled style={{ fontSize: 30 }} />}
            </Upload>
          </ImgCrop>
        </div>
      </form>
    </Modal>
  );
};

export default AddMealModal;
