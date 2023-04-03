import { Modal } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCity } from "../../../redux/actions/CityActions";

const AddCityModal = ({
  countryItem,
  showAddCityModal,
  handleCloseAddCityModal,
}) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const handleAddNewCity = () => {
    dispatch(AddCity(countryItem._id, { name, country }));
    handleCloseAddCityModal();
  };

  const getAllCountry = useSelector((state) => state.country.getAllCountry);

  const handleSelectChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <Modal
      centered
      open={showAddCityModal}
      onOk={handleAddNewCity}
      onCancel={handleCloseAddCityModal}
    >
      <form>
        <div class="form-group">
          <h4 class="text-center">New City {country} </h4>
          <label for="recipient-name" class="col-form-label">
            City Name{" "}
          </label>
          <input
            type="text"
            class="form-control "
            id="person-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <label className="col-form-label mt-2">Country</label>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={handleSelectChange}
        >
          <option value="" selected>
            Select a country
          </option>
          {getAllCountry.countries.map((countryItem) => (
            <option value={countryItem._id}>{countryItem.name}</option>
          ))}
        </select>
      </form>
    </Modal>
  );
};

export default AddCityModal;
