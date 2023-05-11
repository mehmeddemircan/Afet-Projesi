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
  useEffect(() => {
    setUserId(auth.user._id);
  }, [auth]);

  useEffect(() => {
    dispatch(AllShelterForm());
    if (addShelterForm.success) {
      message.success(addShelterForm.message);
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
          
          <AddressInput address={address} setAddress={setAddress} handleSelect={handleSelect} />
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
    </MainLayout>
  );
};

export default ShelterNeedFormPage;
