import { Modal, Upload } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Resizer from "react-image-file-resizer";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
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
  const [images, setImages] = useState(item.images);

  const [gender, setGender] = useState(item.gender);

  return (
    <Modal
      centered
      open={showEditClothesModal}
      onOk={handleCloseEditClothesModal}
      onCancel={handleCloseEditClothesModal}
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
              // {...uploadProps}
              // onPreview={onPreview}
              // onRemove={handleRemoveImage}
              fileList={images}
              listType="picture-card"
            >
              {images.length < 5 && <CameraFilled style={{ fontSize: 30 }} />}
            </Upload>
          </ImgCrop>
        </div>
      </form>
    </Modal>
  );
};

export default EditClothesProductModal;
