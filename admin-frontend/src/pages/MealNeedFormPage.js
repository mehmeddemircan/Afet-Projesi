import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Form, Input, Select, message } from "antd";
import AddressInput from "../components/form/AddressInput";
import { AllMealForm, SendMealForm } from "../redux/actions/MealNeedFormActions";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { CREATE_MEAL_NEED_FORM_RESET } from "../redux/constants/MealNeedFormConstants";
import MetaTitle from "../meta/MetaTitle";
import MealNeedForm from "../components/form/MealNeedForm";
const { Option } = Select;
const MealNeedFormPage = () => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [numberOfAdults, setNumberOfAdults] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [form] =  Form.useForm()
  const auth = useSelector((state) => state.auth);
  const addMealForm = useSelector((state) => state.mealNeedForm.addMealForm)
  const getAllMealForm = useSelector((state) => state.mealNeedForm.getAllMealForm)
  const dispatch = useDispatch();
  useEffect(() => {
    setUserId(auth.user._id);
  }, [auth]);
  const handleSelect = async (value) => {
    setAddress(value);
  };

  useEffect(() => {
    dispatch(AllMealForm());
    if (addMealForm.success) {
      message.success(addMealForm.message);
      form.resetFields();
      dispatch({ type: CREATE_MEAL_NEED_FORM_RESET });
    }
  }, [dispatch, addMealForm.success]);

  const handleSendMealForm = () => {
    dispatch(
      SendMealForm({
        userId,
        name,
        phoneNumber,
        email,
        address,
        numberOfAdults,
        numberOfChildren,
        additionalInfo,
      })
    );
  };


  return (
    <MainLayout>
      <MetaTitle title="Gıda İhtiyaç Formumuz" name="gidaİhtiyaçFormumuz" content="gidaİhtiyaçFormumuz" />
      <h4>Gıda Formu</h4>
    
        <MealNeedForm 
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          address={address}
          setAddress={setAddress}
          additionalInfo={additionalInfo}
          setAdditionalInfo={setAdditionalInfo}
          handleSelect={handleSelect}
          handleSendMealForm={handleSendMealForm}
          form={form}
          numberOfAdults={numberOfAdults}
          setNumberOfAdults={setNumberOfAdults}
          numberOfChildren={numberOfChildren}
          setNumberOfChildren={setNumberOfChildren}
        />
    </MainLayout>
  );
};

export default MealNeedFormPage;
