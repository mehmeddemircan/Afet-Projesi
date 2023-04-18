import { Form, Input, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

import ImgCrop from "antd-img-crop";
import { SendOutlined, CameraFilled } from "@ant-design/icons";
const { Option } = Select;
const AddEditShelterForm = ({
  title,
  setTitle,
  description,
  setDescription,
  categories,
  category,
  handleSelectCategory,
  roomNumber,
  setRoomNumber,
  price,
  setPrice,
  stock,
  setStock,
  images,
  handleRemoveImage,
  uploadProps,
  onPreview,
  onChange,
  fileList
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
          placeholder="type shelter title..."
          defaultValue={title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        className="mb-0"
        rules={[
          {
            required: true,
            message: "Please input your description",
          },
        ]}
      >
        <TextArea
          showCount
          defaultValue={description}
          maxLength={200}
          style={{
            height: 120,
            marginBottom: 24,
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="can resize"
        />
      </Form.Item>
      <Form.Item name="category" label="Category" className="mb-3">
        <Select
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select"
          defaultValue={category}
          onChange={handleSelectCategory}
        >
          {categories.map((category) => (
            <Option value={category}>{category}</Option>
          ))}
        </Select>
      </Form.Item>
      {category == "Ev" && (
        <Form.Item name="roomNumber" label="Room Number" className="mb-3">
          <Input
            type="text"
            placeholder="type room number"
            defaultValue={roomNumber}
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </Form.Item>
      )}
      <div className=" d-flex flex-row justify-content-between">
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
          label="Capacity"

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
      </div>
      <Form.Item name="images" label={`${category} Images`}>
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
  );
};

export default AddEditShelterForm;
