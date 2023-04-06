import { Drawer, List, Tag, message } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProduct } from "../../redux/actions/ProductActions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  AddProductToArea,
  AllArea,
  GetRequriredProducts,
  GetSingleArea,
  RemoveProductFromArea,
} from "../../redux/actions/AreaActions";
import {
  ADD_REQUIRED_PRODUCT_TO_AREA_RESET,
  REMOVE_REQURIRED_PRODUCT_FROM_RESET,
} from "../../redux/constants/AreaConstants";
import ProductItem from "../listitem/ProductItem";

const AddReqProductDrawer = ({
  areaId,
  handleCloseAddReqProductDrawer,
  showAddReqProductDrawer,
  handleDrawerVisibleChange,
}) => {
  const dispatch = useDispatch();

  const getAllProduct = useSelector((state) => state.product.getAllProduct);
  const [filteredReqProducts, setFilteredReqProducts] = useState(
    getAllProduct.products
  );
  const getRequriredProducts = useSelector(
    (state) => state.area.getRequriredProducts
  );
  const addProductToArea = useSelector((state) => state.area.addProductToArea);
  const { area } = useSelector((state) => state.area.getSingleArea);
  // const addProductToArea = useSelector((state) => state.area.addProductToArea);
  const removeProductFromArea = useSelector(
    (state) => state.area.removeProductFromArea
  );
  // const { area } = useSelector((state) => state.area.getSingleArea);
  // const handleRemoveProductFromArea = (productId) => {
  //   dispatch(RemoveProductFromArea(id, productId));
  // };

  const filterReqProducts = () => {
    const filtered = getAllProduct.products.filter(
      (item) =>
        !getRequriredProducts.requrired_products.some(
          (newItem) => newItem.Product._id === item._id
        )
    );
    setFilteredReqProducts(filtered);
  };

  useEffect(() => {
    if (areaId == area._id) {
      dispatch(GetRequriredProducts(areaId));
    }

    // if (removeProductFromArea.isRemoved) {
    //   toast(removeProductFromArea.message);
    //   dispatch({ type: REMOVE_REQURIRED_PRODUCT_FROM_RESET });
    // }
  }, [
    dispatch,
    areaId,
    area,
    addProductToArea.addedProduct,
    // removeProductFromArea.isRemoved,
  ]);
  useEffect(() => {
    filterReqProducts();
  }, [
    areaId,
    area._id,
    addProductToArea,

    getAllProduct.products,
    getRequriredProducts.requrired_products,
  ]);
  // const handleRemoveProductFromArea = (productId) => {
  //   dispatch(RemoveProductFromArea(areaId, productId));
  // };

  const [priorityOrders, setPriorityOrders] = useState([
    "Cok Acil",
    "Acil",
    "Normal",
    "Acil Degil",
  ]);

  const [quantity, setQuantity] = useState(0);
  const [priorityOrder, setPriorityOrder] = useState("");
  const [Product, setProduct] = useState("");
  const [checkedValues, setCheckedValues] = useState([]);

  useEffect(() => {
    dispatch(AllProduct());
  }, [dispatch]);

  const handleAddReqProductToArea = () => {
    dispatch(AddProductToArea(areaId, { Product, quantity, priorityOrder }));
    handleCloseAddReqProductDrawer();
  };
  useEffect(() => {
    if (areaId === area._id) {
      dispatch(AllArea([]));

      if (addProductToArea.addedProduct) {
        message.success(addProductToArea.message);
        dispatch({ type: ADD_REQUIRED_PRODUCT_TO_AREA_RESET });
      }
    }
  }, [dispatch, areaId, area, area._id, addProductToArea.addedProduct]);

  return (
    <Drawer
      afterOpenChange={handleDrawerVisibleChange}
      width={512}
      title="Basic Drawer"
      placement="right"
      onClose={handleCloseAddReqProductDrawer}
      open={showAddReqProductDrawer}
    >
      <h4>{areaId}</h4>
      <form>
        <label for="recipient-name1" class="col-form-label">
          Product{" "}
        </label>
        <select
          className="form-control w-100"
          placeholder="Select Priority"
          value={Product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option selected>Select priority</option>

          {filteredReqProducts.map((c) => (
            <option key={c._id} value={c._id}>
              {c.title}
            </option>
          ))}
        </select>

        {/* button  */}

        <div class="form-group">
          <label for="recipient-name" class="col-form-label">
            Quantity{" "}
          </label>
          <input
            type="number"
            class="form-control "
            id="person-name"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        {/* button  */}

        <div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <label for="recipient-name" class="col-form-label">
              Priority Order{" "}
            </label>

            <div></div>
          </div>
          <select
            className="form-control w-100"
            placeholder="Select Priority"
            value={priorityOrder}
            onChange={(e) => setPriorityOrder(e.target.value)}
          >
            <option selected>Select priority</option>
            {priorityOrders.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-end my-4">
          <button
            type="button"
            className="btn btn-dark   rounded-pill"
            onClick={handleAddReqProductToArea}
          >
            Add
          </button>
        </div>
      </form>
      <List className="my-4" itemLayout="horizontal">
        <List.Item
          actions={[
            <>
              <button className="btn btn-danger btn-sm w-100 rounded-pill ">
                Remove
              </button>
            </>,
          ]}
        >
          <List.Item.Meta
            title={<a>dsa</a>}
            description={
              <>
                {" "}
                <p>
                  Adet :{" "}
                  <Tag color="#108ee9" className="ms-2">
                    {" "}
                    10
                    {/* {reqPerson.quantity} */}
                  </Tag>
                </p>
                <p>Aciliyet : Acil</p>
              </>
            }
          />
        </List.Item>
      </List>
    </Drawer>
  );
};

export default AddReqProductDrawer;
