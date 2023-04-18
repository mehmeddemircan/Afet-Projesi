import { Button, Modal, Upload, message } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Resizer from "react-image-file-resizer";
import { AddBrand, UpdateBrand } from "../../../redux/actions/BrandActions";
import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
const EditBrandModal = ({
  brand,
  handleCloseEditBrandModal,
  showEditBrandModal,
}) => {
  const [name, setName] = useState(brand.name);

  const [image, setImage] = useState(brand.image);

  const [imageLength, setImageLength] = useState(0);

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

  const handleEditBrand = () => {
    dispatch(UpdateBrand(brand._id, { name, image }));
    handleCloseEditBrandModal();
  };

  return (
    <Modal
      centered
      open={showEditBrandModal}
      onOk={handleEditBrand}
      onCancel={handleCloseEditBrandModal}
    >
      <form>
        <div class="form-group">
          <h4 class="text-center">New Brand </h4>
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
            <Upload
              {...uploadProps}
              onPreview={onPreview}
              onRemove={() => {
                setImage("");
                setImageLength(0);
              }}
              defaultFileList={image ? [{ url: image, name: "image" }] : []} // pass an array with one item containing the image details, or an empty array if the image hasn't been uploaded yet
              listType="picture-card"
            >
              {imageLength === 0 && image === "" && (
                <CameraFilled style={{ fontSize: 30 }} />
              )}
            </Upload>
          </ImgCrop>
        </div>
      </form>
    </Modal>
  );
};

export default EditBrandModal;
