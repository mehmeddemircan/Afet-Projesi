import { Form, Input, Select, Space, Button } from "antd";
import React, { Fragment } from "react";
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import FormAddressInput from "../searchbox/FormAddressInput";

const { Option } = Select;
const ClothingNeedForm = ({
  form,
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
  handleSelect,
  handleCategorySelect,
  productCategories,
  handleSizeSelect,
  productSizes,
  genders,
  handleGenderSelect,
  quantity,
  setQuantity,
  clothingItems,
  setClothingItems,
  additionalInfo,
  setAdditionalInfo,
  handleSendForm,
}) => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="90">+90</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Fragment>
      <Form
        form={form}
        className="mx-auto"
        initialValues={{
          prefix: "90",
        }}
        style={{
          maxWidth: 600,
        }}
        layout="vertical"
      >
        <Form.Item
          name="Name"
          label="Name"
          rules={[
            {
              type: "name",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="type your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="address"
          label="Addres"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <FormAddressInput
            address={address}
            setAddress={setAddress}
            handleSelect={handleSelect}
          />
        </Form.Item>
        <Form.List name="clothingItems">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "category"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing category",
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Select Category"
                      style={{
                        width: 120,
                      }}
                      onChange={handleCategorySelect}
                    >
                      {productCategories.map((productCategory) => (
                        <Option key={productCategory} value={productCategory}>
                          {productCategory}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "size"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing category",
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Product Size"
                      style={{
                        width: 120,
                      }}
                      onChange={handleSizeSelect}
                    >
                      {productSizes.map((productSize) => (
                        <Option key={productSize} value={productSize}>
                          {productSize}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "gender"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing gender",
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Select Gender"
                      style={{
                        width: 120,
                      }}
                      onChange={handleGenderSelect}
                    >
                      {genders.map((gender) => (
                        <Option key={gender} value={gender}>
                          {gender}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "quantity"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing quantity name",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="Quantity"
                      defaultValue={0}
                    />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => {
                      remove(name);
                      const newUsers = clothingItems
                        .filter((_, i) => i !== index)
                        .map(({ key, ...rest }) => rest);
                      setClothingItems(newUsers);
                    }}
                  />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Clothing need
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item
          name="additional"
          label="Additinal Info"
          rules={[
            {
              required: true,
              message: "Please input your additional info!",
            },
          ]}
        >
          <TextArea
            showCount
            maxLength={200}
            style={{
              height: 120,
              marginBottom: 24,
            }}
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="can resize"
          />
        </Form.Item>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-dark rounded-pill"
            onClick={handleSendForm}
          >
            Send
          </button>
        </div>
      </Form>
    </Fragment>
  );
};

export default ClothingNeedForm;
