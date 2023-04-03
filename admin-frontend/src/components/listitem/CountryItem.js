import { List } from "antd";
import React, { Fragment } from "react";
import AddCityModal from "../modal/CityCountry/AddCityModal";
import { useState } from "react";

import CityList from "../list/CityList";

const CountryItem = ({ countryItem }) => {
  const [showAddCityModal, setShowAddCityModal] = useState(false);

  const handleShowAddCityModal = () => {
    setShowAddCityModal(true);
  };

  const handleCloseAddCityModal = () => {
    setShowAddCityModal(false);
  };

  const [isShowCities, setIsShowCities] = useState(false)

  const handleToggleShowCities = () => {
    setIsShowCities((prev) => !prev)
  
    

  }

  return (
    <Fragment>
        
   
    <List.Item
      actions={[
        <button
          className="btn btn-light btn-sm w-100"
            onClick={handleToggleShowCities}
        >
            {isShowCities ? "Close" : "Show Cities"}
        </button>,
        
        <button
          className="btn btn-light btn-sm w-100 "
          onClick={handleShowAddCityModal}
        >
          <i class="fa-solid fa-plus"></i> Add City{" "}
        </button>,
        <AddCityModal
          countryItem={countryItem}
          showAddCityModal={showAddCityModal}
          handleCloseAddCityModal={handleCloseAddCityModal}
        />,
      ]}
    >
      <List.Item.Meta title={<a>{countryItem.name}</a>} />
    </List.Item>
            {isShowCities  ? <CityList countryItem={countryItem} key={countryItem._id} /> : null}
    </Fragment>
  );
};

export default CountryItem;
