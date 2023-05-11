import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import {
  DatePicker,
  Form,
  Input,
  List,
  Popover,
  Select,
  Space,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { AllCity } from "../redux/actions/CityActions";
import {
  AllShelterForm,
  SendShelterForm,
} from "../redux/actions/ShelterNeedFormActions";
import { CREATE_SHELTER_NEED_FORM_RESET } from "../redux/constants/ShelterNeedFormConstants";
import SearchMapContent from "../components/map/SearchMapContent";
import PlacesAutocomplete from "react-places-autocomplete";
import AddressInput from "../components/form/AddressInput";
import MetaTitle from "../meta/MetaTitle";
import ShelterNeedForm from "../components/form/ShelterNeedForm";
const { Option } = Select;
const ShelterNeedFormPage = () => {
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
  const getAllCity = useSelector((state) => state.city.getAllCity);
  const auth = useSelector((state) => state.auth);
  const getAllShelterForm = useSelector(
    (state) => state.shelterNeedForm.getAllShelterForm
  );
  const addShelterForm = useSelector(
    (state) => state.shelterNeedForm.addShelterForm
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
    dispatch(AllShelterForm());
    if (addShelterForm.success) {
      message.success(addShelterForm.message);
      form.resetFields()
      dispatch({ type: CREATE_SHELTER_NEED_FORM_RESET });
    }
  }, [dispatch, addShelterForm.success]);

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
    <MainLayout>
      <MetaTitle title="Barınma Formu" name="barınmaFormu" content="barınmaFormu" />
      <h4>Barınma Formu</h4>
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
    </MainLayout>
  );
};

export default ShelterNeedFormPage;
