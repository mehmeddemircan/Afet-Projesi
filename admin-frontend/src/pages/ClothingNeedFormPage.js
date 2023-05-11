import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Button, Form, Input, Select, Space, message } from "antd";
import TextArea from "antd/es/input/TextArea";

import { useDispatch, useSelector } from "react-redux";
import {
  AllClothingForm,
  SendClothingForm,
} from "../redux/actions/ClothingNeedFormAction";
import { useEffect } from "react";
import FormInfoItem from "../components/listitem/FormInfoItem";
import { ADD_CLOTHING_FORM_RESET } from "../redux/constants/ClothingNeedFormConstants";
import AddressInput from "../components/form/AddressInput";
import MetaTitle from "../meta/MetaTitle";
import ClothingNeedForm from "../components/form/ClothingNeedForm";
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

  const [form] = Form.useForm()

  const handleCategorySelect = (value) => {
    setProductCategory(value);
    if (value === "Pantolon") {
   
      setProductSizes(pantSizes);
    }
    if (value === "Sweatshirt" || value === "Pjima" || value === "Esofman") {
      setProductSizes(tshirtSizes);
    }
  };

  const handleSizeSelect = (value) => {
    setProductSize(value);

  };

  const handleGenderSelect = (value) => {
    setGender(value);

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
  const addClothingForm = useSelector(
    (state) => state.clothingNeedForm.addClothingForm
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllClothingForm());
    if (addClothingForm.success) {
      message.success(addClothingForm.message);
      form.resetFields()
      dispatch({ type: ADD_CLOTHING_FORM_RESET });
    }
  }, [dispatch, addClothingForm.success]);

  const auth = useSelector((state) => state.auth);
  const [userId, setUserId] = useState(auth.user._id);
  useEffect(() => {
    setUserId(auth.user._id);
  }, [auth]);

  const handleSelect = (value) => {
    setAddress(value);
  };

  const handleSendForm = () => {
    dispatch(
      SendClothingForm({
        userId,
        name,
        phoneNumber,
        email,
        address,
        clothingItems,
        additionalInfo,
      })
    );
  };


  useEffect(() => {
    handleAddClothingItem();
  }, [
    productCategory &&
      productSize &&
      gender &&
      quantity !== 0 &&
      quantity.toString() !== "",
  ]);


  return (
    <MainLayout>
      <MetaTitle title="Giyim İhtiyaç Formumuz" name="giyimİhtiyaçFormu" content="giyimİhtiyaçFormu" />
      <h4>Giyim İhtiyaç Formu</h4>
        <ClothingNeedForm 
            form={form}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            address={address}
            setAddress={setAddress}
            handleSelect={handleSelect}
            handleCategorySelect={handleCategorySelect}
            productCategories={productCategories}
            handleSizeSelect={handleSizeSelect}
            handleGenderSelect={handleGenderSelect}
            productSizes={productSizes}
            quantity={quantity}
            setQuantity={setQuantity}
            genders={genders}
            clothingItems={clothingItems}
            setClothingItems={setClothingItems}
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
            handleSendForm={handleSendForm}
        />
    </MainLayout>
  );
};

export default ClothingNeedFormPage;
