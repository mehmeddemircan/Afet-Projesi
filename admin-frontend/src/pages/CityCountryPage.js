import React, { Fragment } from "react";
import MainLayout from "../components/layout/MainLayout";

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCountry } from "../redux/actions/CountryActions";
import CountryList from "../components/list/CountryList";
import { ADD_CITY_RESET } from "../redux/constants/CityConstants";
const CityCountryPage = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const addNewCity = useSelector((state) => state.city.addNewCity);

  useEffect(() => {
    dispatch(AllCountry());
    if (addNewCity.success) {
      dispatch({ type: ADD_CITY_RESET });
    }
  }, [dispatch, addNewCity.success]);

  return (
    <MainLayout>
      <div className="d-flex  flex-row my-4">
        <input
          className="form-control"
          placeholder="Add Country name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary mx-2">Add</button>
      </div>
      <CountryList />
    </MainLayout>
  );
};

export default CityCountryPage;
