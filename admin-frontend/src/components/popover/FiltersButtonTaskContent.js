import { Select, Space } from "antd";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCity } from "../../redux/actions/CityActions";
import { useState } from "react";
import { GetTaskByCityId } from "../../redux/actions/TaskActions";
import { useEffect } from "react";
import CityCountrySelect from "../select/CityCountrySelect";
const { Option } = Select;
const FiltersButtonTaskContent = ({handleAddCityChange,handleCountryChange}) => {

 
 
  

  return (
    <Fragment>
          <CityCountrySelect isMultipleSelect={true} handleAddCityChange={handleAddCityChange} handleCountryChange={handleCountryChange} />
    </Fragment>
  );
};

export default FiltersButtonTaskContent;
