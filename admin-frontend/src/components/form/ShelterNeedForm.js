import { DatePicker, Form, Input, Select, Space } from "antd";
import React from "react";
import AddressInput from "./AddressInput";
import TextArea from "antd/es/input/TextArea";
const { Option } = Select;
const ShelterNeedForm = ({
  form,
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
  additionalInfo,
  setAdditionalInfo,
  handleSelect,
  handleAddCityChange,
  handleCheckinDateChange,
  handleCheckoutDateChange,
  numberOfAdults,
  setNumberOfAdults,
  numberOfChildren,
  setNumberOfChildren,
  handleSendShelterForm,
  getAllCity
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
        <AddressInput
          address={address}
          setAddress={setAddress}
          handleSelect={handleSelect}
        />
        {/* <SearchMapContent 
      address={address}
      setAddress={setAddress}
      isAntdInput={false}
     /> */}
        {/* <Input
        type="text"
        placeholder="your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      /> */}
      </Form.Item>

      <Form.Item name="cityOptions" label="City Options">
        <Select
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select"
          onChange={handleAddCityChange}
        >
          {getAllCity.cities.map((city) => (
            <Option value={city._id}>{city.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <div className="d-flex flex-row ">
        <Form.Item name="checkinDate" label="Checkin Date">
          <Space direction="vertical">
            <DatePicker onChange={handleCheckinDateChange} />
          </Space>
        </Form.Item>
        <Form.Item name="checkoutDate" label="Checkout Date" className="mx-3">
          <Space direction="vertical">
            <DatePicker onChange={handleCheckoutDateChange} />
          </Space>
        </Form.Item>
      </div>
      <div className="d-flex flex-row">
        <Form.Item
          name="numberofAdults"
          label="Number Of Adults"
          // rules={[
          //   {
          //     required: true,
          //     message: "Missing quantity name",
          //   },
          // ]}
        >
          <Input
            type="number"
            value={numberOfAdults}
            onChange={(e) => setNumberOfAdults(e.target.value)}
            placeholder="number of adults"
          />
        </Form.Item>
        <Form.Item
          name="numberofChildren"
          label="Number Of Children"
          className="mx-3"
          //  rules={[
          //    {
          //      required: true,
          //      message: "Missing quantity name",
          //    },
          //  ]}
        >
          <Input
            type="number"
            value={numberOfChildren}
            onChange={(e) => setNumberOfChildren(e.target.value)}
            placeholder="number of children"
          />
        </Form.Item>
      </div>
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
          onClick={handleSendShelterForm}
        >
          Send
        </button>
      </div>
    </Form>
  );
};

export default ShelterNeedForm;
