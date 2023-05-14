import React, { useEffect, useState } from 'react'
import { SEND_SHELTER_FORM_RESET } from '../../redux/constants/FormConstants';
import { Form, message } from 'antd';
import { SendShelterForm } from '../../redux/actions/FormActions';
import ShelterNeedForm from '../form/ShelterNeedForm';
import { useDispatch, useSelector } from 'react-redux';
import { AllCity } from '../../redux/actions/CityCountryActions';

const ShelterNeedFormSegment = () => {

    const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [numberOfAdults, setNumberOfAdults] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  const [form] = Form.useForm()
  const getAllCity = useSelector((state) => state.cityCountry.getAllCity);
  const auth = useSelector((state) => state.auth);

  const sendShelterForm = useSelector(
    (state) => state.form.sendShelterForm
  );

  const dispatch = useDispatch();

  const countryId = "642aee9f57a3fb51360bfcdc";

  useEffect(() => {
    dispatch(AllCity(countryId));
  }, [dispatch]);
  const handleAddCityChange = (value) => {
    setCityOptions(value);
  };
  const handleCheckinDateChange = (date, dateString) => {
    setCheckinDate(dateString);
  };
  const handleCheckoutDateChange = (date, dateString) => {
    setCheckoutDate(dateString);
  };

  useEffect(() => {
    setUserId(auth.user._id);
  }, [auth]);

  useEffect(() => {
    if (sendShelterForm.success) {
      message.success(sendShelterForm.message);
      form.resetFields()
      setAddress("")
      dispatch({ type: SEND_SHELTER_FORM_RESET });
    }
  }, [dispatch, sendShelterForm.success]);

  const handleSelect = async (value) => {
    setAddress(value);
  };
  const handleSendShelterForm = () => {
    dispatch(
      SendShelterForm({
        userId,
        name,
        phoneNumber,
        email,
        address,
        cityOptions,
        checkinDate,
        checkoutDate,
        numberOfAdults,
        numberOfChildren,
        additionalInfo,
      })
    );
  };


  return (
    <ShelterNeedForm
    name={name}
    setName={setName}
    email={email}
    setEmail={setEmail}
    phoneNumber={phoneNumber}
    setPhoneNumber={setPhoneNumber}
    additionalInfo={additionalInfo}
    setAdditionalInfo={setAdditionalInfo}
    numberOfAdults={numberOfAdults}
    setNumberOfAdults={setNumberOfAdults}
    numberOfChildren={numberOfChildren}
    setNumberOfChildren={setNumberOfChildren}
    address={address}
    setAddress={setAddress}
    getAllCity={getAllCity} 
    handleAddCityChange={handleAddCityChange}
    handleCheckinDateChange={handleCheckinDateChange}
    handleCheckoutDateChange={handleCheckoutDateChange}
    form={form}
    handleSelect={handleSelect}
    handleSendShelterForm={handleSendShelterForm}
  />
  )
}

export default ShelterNeedFormSegment