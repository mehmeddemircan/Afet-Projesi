import React, { useEffect, useState } from 'react'
import MealNeedForm from '../form/MealNeedForm'
import { Form, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SEND_MEAL_FORM_RESET } from '../../redux/constants/FormConstants';
import { SendMealForm } from '../../redux/actions/FormActions';

const MealNeedFormSegment = () => {

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
  const sendMealForm = useSelector((state) => state.form.sendMealForm)

  const dispatch = useDispatch();
  useEffect(() => {
    setUserId(auth.user._id);
  }, [auth]);
  const handleSelect = async (value) => {
    setAddress(value);
  };

  useEffect(() => {

    if (sendMealForm.success) {
      message.success(sendMealForm.message);
      form.resetFields();
      setAddress("")
      dispatch({ type: SEND_MEAL_FORM_RESET });
    }
  }, [dispatch, sendMealForm.success]);

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
  )
}

export default MealNeedFormSegment