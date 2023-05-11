import React, { Fragment } from "react";
import MainLayout from "../components/layout/MainLayout";

import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCountry, AllCountry } from "../redux/actions/CountryActions";
import CountryList from "../components/list/CountryList";
import { ADD_CITY_RESET } from "../redux/constants/CityConstants";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import { Badge, message } from "antd";
import { ADD_COUNTRY_RESET } from "../redux/constants/CountryConstants";
import MetaTitle from "../meta/MetaTitle";
const CityCountryPage = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const addNewCity = useSelector((state) => state.city.addNewCity);
  const addNewCountry = useSelector((state) => state.country.addNewCountry);

  const handleAddNewCountry = () => {
    dispatch(AddCountry({name}))
  }
  const handleAddKeyCountry = (e) => {
    if (e.key === "Enter") {
        dispatch(AddCountry({name}))
        setName("")
    }
  }

  useEffect(() => {
    dispatch(AllCountry());
    if (addNewCity.success) {
      dispatch({ type: ADD_CITY_RESET });
    }
    if (addNewCountry.success) {
      message.success(addNewCountry.message)
      dispatch({type : ADD_COUNTRY_RESET})
    }
  }, [dispatch, addNewCity.success,addNewCountry.success]);



  return (
    <MainLayout>
      <MetaTitle title="Sehir Ve Ülke " name="sehirveülke" content="sehirveülke" />
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control rounded-pill"
          placeholder="Country Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleAddKeyCountry}
        />
        <button className="btn btn-primary rounded-pill ms-1" type="button"  onClick={handleAddNewCountry}>
          Add Country
        </button>
      </div>
      <hr />
      <InfoBreadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: (
              <a href="/alanlar" onClick={(e) => e.preventDefault()}>
                Countries
              </a>
            ),
          },
          {
            title: (
              <>
                <Badge color="#faad14" count={1}>
                  <a className="me-2">Length</a>
                </Badge>
              </>
            ),
          },
        ]}
      />

      <CountryList />
    </MainLayout>
  );
};

export default CityCountryPage;
