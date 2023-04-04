import { Button, DatePicker, Popover, Select, Space } from "antd";
import React, { Fragment } from "react";
import CityCountrySelect from "../select/CityCountrySelect";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCity } from "../../redux/actions/CityActions";
import { AllCountry } from "../../redux/actions/CountryActions";
import { useEffect } from "react";
const { Option } = Select;
const SearchTask = ({ text, setText, handleDateChange, dueDate }) => {
  const dispatch = useDispatch();

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const handleCountryChange = (value) => {
    setCountry(value);
    dispatch(AllCity(value));
  };
  useEffect(() => {
    dispatch(AllCountry());
  }, [dispatch]);

  const handleCityChange = (value) => {
    setCity(value);
  };
  const getAllCountry = useSelector((state) => state.country.getAllCountry);
  return (
    <Fragment>
      <h5 className="my-4">Search Task </h5>
      <div
        className="d-flex justify-content-between my-3 align-items-center rounded-pill"
        style={{
          background: "rgb(221,221,221)",
          height: "60px",
        }}
      >
        <input
          className="form-control rounded-pill"
          style={{
            border: "none",
            backgroundColor: "transparent",
            marginRight: "10px",
            flex: 1,
          }}
          placeholder="Task Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div
          className="form-control"
          style={{
            border: "none",
            backgroundColor: "transparent",
            marginRight: "10px",
            flex: 1,
          }}
        >
          <DatePicker
            style={{
              fontSize: "24px",
              width: "100%",
              border: "none",
              background: "transparent",
            }}
            onChange={handleDateChange}
          />
        </div>
        <div
          className="form-control"
          style={{
            border: "none",
            backgroundColor: "transparent",
            marginRight: "10px",
            flex: 1,
          }}
        >
          <Popover
            title="Select country- city"
            content={
              <CityCountrySelect
                isMultipleSelect={false}
                handleCityChange={handleCityChange}
                handleCountryChange={handleCountryChange}
              />
            }
            placement="bottomLeft"
            trigger={"click"}
          >
            <Button
              className="text-start w-100 "
              type="text"
              icon={<i class="fa-solid fa-location-dot float-end mt-1"></i>}
            >
              Select City
            </Button>
          </Popover>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchTask;
