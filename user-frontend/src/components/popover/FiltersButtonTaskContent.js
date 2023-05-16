import { Select, Space } from "antd";
import React, { Fragment } from "react";

import CityCountrySelect from "../select/CityCountrySelect";

const FiltersButtonTaskContent = ({
  handleAddCityChange,
  handleCountryChange,
}) => {
  return (
    <Fragment>
      <CityCountrySelect
        isMultipleSelect={true}
        handleAddCityChange={handleAddCityChange}
        handleCountryChange={handleCountryChange}
      />
    </Fragment>
  );
};

export default FiltersButtonTaskContent;
