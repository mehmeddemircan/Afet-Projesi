import { Modal, Upload, message } from "antd";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Resizer from "react-image-file-resizer";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
import { AddClothes } from "../../../redux/actions/ClothesAction";
import { useParams } from "react-router-dom";
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

  const [gender, setGender] = useState("");

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
        <form>
          <div class="form-group">
            <h4 class="text-center">New Title </h4>
            <label for="recipient-name" class="col-form-label">
              Product Title
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
              Gender
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option selected>Select gender</option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
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
                onRemove={handleRemoveImage}
                listType="picture-card"
              >
                {images.length < 5 && <CameraFilled style={{ fontSize: 30 }} />}
              </Upload>
            </ImgCrop>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default AddClothesProductModal;
