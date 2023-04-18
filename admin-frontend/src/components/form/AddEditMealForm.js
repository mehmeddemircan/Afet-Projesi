import { Form, Input, Upload } from "antd";
import React from "react";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
const AddEditMealForm = ({
  title,
  setTitle,
  image,
  setImage,
  price,
  setPrice,
  imageLength,
  setImageLength,
  stock,
  setStock,
  uploadProps,
  onPreview,
}) => {
  return (
    <Form
      className="mx-auto"
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
    >
      <Form.Item
        name="title"
        label="Title"
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
          placeholder="type meal title..."
          defaultValue={title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
        label="Stock"

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
          placeholder="capacity"
        />
      </Form.Item>
      <Form.Item name="images" label="Thumbnail Image">
        <ImgCrop rotationSlider>
          <Upload
            {...uploadProps}
           
            defaultFileList={image ? [{ url: image, name: "image" }] : []}
            onPreview={onPreview}
            onRemove={() => {
              setImage("");
              setImageLength(0);
            }}
            listType="picture-card"
          >
            {imageLength === 0 && <CameraFilled style={{ fontSize: 30 }} />}
          </Upload>
        </ImgCrop>
      </Form.Item>
    </Form>
  );
};

export default AddEditMealForm;
