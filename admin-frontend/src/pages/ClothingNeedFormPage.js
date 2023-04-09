import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Button, Form, Input, Select, Space, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  AllClothingForm,
  SendClothingForm,
} from "../redux/actions/ClothingNeedFormAction";
import { useEffect } from "react";
import FormInfoItem from "../components/listitem/FormInfoItem";
import { ADD_CLOTHING_FORM_RESET } from "../redux/constants/ClothingNeedFormConstants";
const { Option } = Select;
const ClothingNeedFormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [clothingItems, setClothingItems] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [productCategories, setProductCategories] = useState([
    "Sweatshirt",
    "Pantolon",
    "Pjima",
    "Eşofman",
    "Ayakkabı",
  ]);
  const [productCategory, setProductCategory] = useState("");
  const [pantSizes, setPantSizes] = useState([
    "28-30",
    "30-32",
    "31-30",
    "29-30",
    "32-33",
  ]);
  const [tshirtSizes, setTshirtSizes] = useState([
    "2XS",
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL",
  ]);
  const [genders, setGenders] = useState(["Erkek", "Kadın", "Unisex"]);
  const [gender, setGender] = useState("");
  const [productSizes, setProductSizes] = useState([]);
  const [productSize, setProductSize] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleCategorySelect = (value) => {
    setProductCategory(value);
    if (value === "Pantolon") {
      alert(`${value} secildi`);
      setProductSizes(pantSizes);
    }
    if (value === "Sweatshirt" || value === "Pjima" || value === "Esofman") {
      setProductSizes(tshirtSizes);
    }
  };

  const handleSizeSelect = (value) => {
    setProductSize(value);
    alert(`${value} selected`);
  };

  const handleGenderSelect = (value) => {
    setGender(value);
    alert(value);
  };

  const handleAddClothingItem = () => {
    // Check if clothingItems array is empty
    if (productCategory && productSize && gender && quantity !== 0) {
      const newItem = {
        productCategory: productCategory,
        productSize: productSize,
        gender: gender,
        quantity: quantity,
      };

      setClothingItems([...clothingItems, newItem]);
      setProductCategory("");
      setProductSize("");
      setGender("");
      setQuantity(0);
    }
  };

  const getAllClothingForms = useSelector(
    (state) => state.clothingNeedForm.getAllClothingForms
  );
  const addClothingForm = useSelector((state) => state.clothingNeedForm.addClothingForm)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllClothingForm());
    if(addClothingForm.success){
        message.success(addClothingForm.message)
        dispatch({type : ADD_CLOTHING_FORM_RESET})
    }
  }, [dispatch,addClothingForm.success]);
  const handleSendForm = () => {
    dispatch(
      SendClothingForm({
        name,
        phoneNumber,
        email,
        address,
        clothingItems,
        additionalInfo,
      })
    );
  };

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
    <MainLayout>
      <h6>
        {clothingItems.map((a) => (
          <h4>
            {a.productCategory}
            {a.productSize}
            {a.gender}
            {a.quantity}
          </h4>
        ))}
      </h6>
      <Form
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
          <Input
            type="text"
            placeholder="your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
                    handleAddClothingItem();
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

      {getAllClothingForms.clothingForms.map((form) => (
        <FormInfoItem key={form._id} form={form} />
      ))}
    </MainLayout>
  );
};

export default ClothingNeedFormPage;
