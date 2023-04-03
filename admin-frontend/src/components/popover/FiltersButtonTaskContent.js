import { Select, Space } from "antd";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCity } from "../../redux/actions/CityActions";
import { useState } from "react";
import { GetTaskByCityId } from "../../redux/actions/TaskActions";
import { useEffect } from "react";
const { Option } = Select;
const FiltersButtonTaskContent = ({handleAddCityChange,selectedCities,handleCountryChange}) => {
  const getAllCountry = useSelector((state) => state.country.getAllCountry);
  const getAllCity = useSelector((state) => state.city.getAllCity)
 
 
  

  return (
    <Fragment>
      <Space
        style={{
          width: "300px",
        }}
        direction="vertical"
      > 
        {selectedCities.length}
        <label className="col-form-label">Country</label>
        <Select
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select country"
          onChange={handleCountryChange}
        >
          {getAllCountry.countries.map((country) => (
            <Option value={country._id}>{country.name}</Option>
          ))}
        </Select>
        <label className="col-form-label">Cities</label>
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
      </Space>
    </Fragment>
  );
};

export default FiltersButtonTaskContent;
