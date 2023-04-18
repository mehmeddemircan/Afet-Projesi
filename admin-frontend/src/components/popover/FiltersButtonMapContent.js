import { Select } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { AllProduct } from "../../redux/actions/ProductActions";
import { AllPersonType } from "../../redux/actions/PersonTypeActions";
import { AllArea } from "../../redux/actions/AreaActions";
const { Option } = Select;
const FiltersButtonMapContent = () => {
  const getAllProduct = useSelector((state) => state.product.getAllProduct);
  const getAllPersonType = useSelector(
    (state) => state.personType.getAllPersonType
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllProduct());
    dispatch(AllPersonType());
  }, [dispatch]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);

  const handleAddProduct = (value) => {
    setSelectedProducts(value);
  };
  const handleAddPerson = (value) => {
    setSelectedPeople(value);
  };
  // Filter actions
  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      // Remove the value from the checkedValues array if it already exists
      setCheckedValues(checkedValues.filter((v) => v !== value));
    } else {
      // Add the value to the checkedValues array if it doesn't already exist
      setCheckedValues([...checkedValues, value]);
    }
  };

  useEffect(() => {
    dispatch(AllArea(selectedProducts, checkedValues, selectedPeople));
  }, [
    dispatch,
    selectedPeople.length,
    selectedProducts.length,
    checkedValues.length,
  ]);

  return (
    <Fragment>
      <div className="d-flex flex-column">
        <div className="px-2 mb-2 border-bottom">
          {" "}
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="Cok Acil"
            id="flexCheckDefault"
            onClick={(e) => handleCheckboxChange(e.target.value)}
          />{" "}
          <a
            style={{
              fontSize: "15px",
            }}
          >
            Cok Acil Olanlar
          </a>
        </div>
        <div className="px-2  mb-2 border-bottom">
          {" "}
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="Acil"
            id="flexCheckDefault"
            onClick={(e) => handleCheckboxChange(e.target.value)}
          />{" "}
          <a
            style={{
              fontSize: "15px",
            }}
          >
            {" "}
            Acil Olanlar
          </a>
        </div>
        <div className="px-2 mb-2 border-bottom">
          {" "}
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="Normal"
            id="flexCheckDefault"
            onClick={(e) => handleCheckboxChange(e.target.value)}
          />{" "}
          <a
            style={{
              fontSize: "15px",
            }}
          >
            Normal Olanlar
          </a>
        </div>
        <div className="px-2 mb-2 border-bottom">
          {" "}
          <input
            class="form-check-input me-2"
            type="checkbox"
            value="Acil Degil"
            id="flexCheckDefault"
            onClick={(e) => handleCheckboxChange(e.target.value)}
          />
          {""}
          <a
            style={{
              fontSize: "15px",
            }}
          >
            Suan Gerekli olmayanlar
          </a>
        </div>

        <div>
          <label className="col-form-label">Product</label>
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            onChange={handleAddProduct}
          >
            {getAllProduct.products.map((product) => (
              <Option value={product.title}>{product.title}</Option>
            ))}
          </Select>
        </div>
        <div>
          <label className="col-form-label">Person</label>
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            onChange={handleAddPerson}
          >
            {getAllPersonType.personTypes.map((person) => (
              <Option value={person.name}>{person.name}</Option>
            ))}
          </Select>
        </div>
      </div>
    </Fragment>
  );
};

export default FiltersButtonMapContent;
