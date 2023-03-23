import React, { Fragment, useEffect, useState } from "react";
import AddAreaModal from "../modal/Area/AddAreaModal";
import AddButton from "./AddButton";
import { Popover } from "antd";
import { Select, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AllProduct } from "../../redux/actions/ProductActions";
import {
  AllArea,
  AllAreaByProductTitle,
} from "../../redux/actions/AreaActions";
import {
  ADD_AREA_RESET,
  DELETE_AREA_RESET,
  GET_AREAS_BY_PRODUCT_TITLE_RESET,
} from "../../redux/constants/AreaConstants";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
const { Option } = Select;
const AddAreaButton = () => {
  const [showAddAreaModal, setShowAddAreaModal] = useState(false);

  const handleShowAddAreaModal = () => {
    setShowAddAreaModal(true);
  };

  const handleCloseAddAreaModal = () => {
    setShowAddAreaModal(false);
  };

  const getAllProduct = useSelector((state) => state.getAllProduct);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const addArea = useSelector((state) => state.addArea);
  const deleteUpdateArea = useSelector((state) => state.deleteUpdateArea);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const handleChange = (value) => {
    setSelectedProducts(value);
  };
  useEffect(() => {
    if (selectedProducts.length == 0) {
      dispatch({ type: GET_AREAS_BY_PRODUCT_TITLE_RESET });
    }
    if (selectedProducts.length > 0) {
      dispatch(AllAreaByProductTitle(selectedProducts));
    } else {
      dispatch(AllArea(priorities));
    }
    if (addArea.success) {
      dispatch({ type: ADD_AREA_RESET });
    }
    if (deleteUpdateArea.isDeleted) {
      toast(t("deletedAreaMessage"));
      dispatch({ type: DELETE_AREA_RESET });
    }
  }, [
    dispatch,
    addArea.success,
    deleteUpdateArea.isDeleted,
    selectedProducts.length,
  ]);

  useEffect(() => {
    dispatch(AllProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="row my-3">
        <div className="d-flex justify-content-end">
          <Popover
            content={
              <>
                <Space
                  style={{
                    width: "300px",
                  }}
                  direction="vertical"
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please select"
                    onChange={handleChange}
                  >
                    {getAllProduct.products.map((product) => (
                      <Option value={product.title}>{product.title}</Option>
                    ))}
                  </Select>
                </Space>
              </>
            }
            placement="bottom"
            title="Select products"
            trigger={"click"}
          >
            <button
              className="btn text-white mx-2 rounded-pill"
              style={{ background: "#222" }}
            >
              Filters
            </button>
          </Popover>
          <AddButton name="Add Area" onClick={handleShowAddAreaModal} />
        </div>
      </div>
      <AddAreaModal
        showAddAreaModal={showAddAreaModal}
        handleCloseAddAreaModal={handleCloseAddAreaModal}
      />
    </Fragment>
  );
};

export default AddAreaButton;
