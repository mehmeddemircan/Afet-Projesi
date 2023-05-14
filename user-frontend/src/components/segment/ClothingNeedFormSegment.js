import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendClothingForm } from "../../redux/actions/FormActions";
import ClothingNeedForm from "../form/ClothingNeedForm";
import { Form, message } from "antd";
import { SEND_CLOTHING_FORM_RESET } from "../../redux/constants/FormConstants";

const ClothingNeedFormSegment = () => {
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

  const auth = useSelector((state) => state.auth);
  const [userId, setUserId] = useState(auth.user._id);
  const dispatch = useDispatch();
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

  const sendClothingForm = useSelector((state) => state.form.sendClothingForm);
  const [form] = Form.useForm();

  useEffect(() => {
    if (sendClothingForm.success) {
      message.success(sendClothingForm.message);
      form.resetFields();
      setAddress("");
      dispatch({ type: SEND_CLOTHING_FORM_RESET });
    }
  }, [dispatch, sendClothingForm.success]);

  return (
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
  );
};

export default ClothingNeedFormSegment;
