import { Form, Input, Select, Upload, message } from "antd";

import React, { Fragment } from "react";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
import Resizer from "react-image-file-resizer";
import axios from "axios";
const { Option } = Select;

const AddEditClothesForm = ({
  title,
  setTitle,
  gender,
  genders,
  price,
  setPrice,
  stock,
  setStock,
  handleSelectGender,
  images,
  uploadProps,
  onPreview,
  handleRemoveImage,
  onChange,
  fileList,
}) => {
  return (
    <Fragment>
      <Form
        className="mx-auto"
        style={{
          maxWidth: 600,
        }}
        layout="vertical"
      >
        <Form.Item
          name="producttitle"
          label="Product Title"
          className="mt-3"
          // rules={[
          //   {
          //     type: "name",
          //     message: "The input is not valid E-mail!",
          //   },
          //   {
          //     required: true,
          //     message: "Please input your E-mail!",
          //   },
          // ]}
        >
          <Input
            type="text"
            placeholder="type product title..."
            defaultValue={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            defaultValue={gender}
            onChange={handleSelectGender}
          >
            {genders.map((gender) => (
              <Option key={gender} value={gender}>
                {gender}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"

          //  rules={[
          //    {
          //      required: true,
          //      message: "Missing quantity name",
          //    },
          //  ]}
        >
          <Input
            type="number"
            defaultValue={price}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="price"
          />
        </Form.Item>
        <Form.Item
          name="stock"
          label="stock"

          //  rules={[
          //    {
          //      required: true,
          //      message: "Missing quantity name",
          //    },
          //  ]}
        >
          <Input
            type="number"
            defaultValue={stock}
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            placeholder="stock"
          />
        </Form.Item>
        <Form.Item name="productImage" label="Product Images">
          <ImgCrop rotationSlider>
            <Upload
              {...uploadProps}
              listType="picture-card"
              defaultFileList={fileList}
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              onRemove={(image) => handleRemoveImage(image.public_id)}
            >
              {images.length < 5 && <CameraFilled style={{ fontSize: 30 }} />}
            </Upload>
          </ImgCrop>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default AddEditClothesForm;
