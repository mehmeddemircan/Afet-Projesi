import { Select, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
const { Option } = Select;
const CityCountrySelect = ({
  handleAddCityChange,
  handleCountryChange,
  isMultipleSelect,
  handleCityChange,
}) => {
  const getAllCountry = useSelector((state) => state.country.getAllCountry);
  const getAllCity = useSelector((state) => state.city.getAllCity);
  return (
    <Space
      style={{
        width: "300px",
      }}
      direction="vertical"
    >
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
      {isMultipleSelect ? (
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
      ) : (
        <Select
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select city "
          onChange={handleCityChange}
        >
          {getAllCity.cities.map((city) => (
            <Option value={city._id}>{city.name}</Option>
          ))}
        </Select>
      )}
    </Space>
  );
};

export default CityCountrySelect;
