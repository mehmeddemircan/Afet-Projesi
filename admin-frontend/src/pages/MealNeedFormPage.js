import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Form, Input, Select, message } from "antd";
import AddressInput from "../components/form/AddressInput";
import { AllMealForm, SendMealForm } from "../redux/actions/MealNeedFormActions";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { CREATE_MEAL_NEED_FORM_RESET } from "../redux/constants/MealNeedFormConstants";
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
      dispatch({ type: CREATE_MEAL_NEED_FORM_RESET });
    }
  }, [dispatch, addMealForm.success]);

  const handleMealForm = () => {
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
      <h4>Gıda Formu</h4>
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
            onClick={handleMealForm}
          >
            Send
          </button>
        </div>
      </Form>
      {getAllMealForm.mealForms.map((form) => (
        <h2>{form.name}</h2>
      ))}
    </MainLayout>
  );
};

export default MealNeedFormPage;
