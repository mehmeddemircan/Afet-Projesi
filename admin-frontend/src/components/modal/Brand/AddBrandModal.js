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

  const [image, setImage] = useState("");
  const [categories,setCategories] = useState(["Giyim", "Gıda", "Ev-Hotel","Ulaşım"])

  const [category, setCategory] = useState("")

  const [imageLength, setImageLength] = useState(0);

  // const onFinish = (imageUrl) => {
  //   setImageList([...imageList, imageUrl]);
  // };

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

  const dispatch = useDispatch();

  const handleAddBrand = () => {
    dispatch(AddBrand({ name,category, image }));
    handleCloseAddBrandModal();
    setName("");
    setImage("");
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
        <div>
              <label for="recipient-name" class="col-form-label">
                Brand Category
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
             
                <option selected>Open this select menu</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
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

export default AddBrandModal;
