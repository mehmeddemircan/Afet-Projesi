import { List } from "antd";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CountryItem from "../listitem/CountryItem";

const CountryList = () => {
  const getAllCountry = useSelector((state) => state.country.getAllCountry);

  return (
    <Fragment>
      <List className="my-4" itemLayout="horizontal">
        {getAllCountry.countries.map((countryItem) => (
            <CountryItem key={countryItem._id} countryItem={countryItem} />
        ))}
      </List>
    </Fragment>
  );
};

export default CountryList;
