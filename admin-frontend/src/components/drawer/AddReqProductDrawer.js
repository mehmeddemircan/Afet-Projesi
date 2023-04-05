import { Drawer } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProduct } from "../../redux/actions/ProductActions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { GetRequriredProducts, RemoveProductFromArea } from "../../redux/actions/AreaActions";
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

  // const dispatch = useDispatch();

  // const getAllProduct = useSelector((state) => state.product.getAllProduct);
  // const [filteredReqProducts, setFilteredReqProducts] = useState(
  //   getAllProduct.products
  // );
  // const getRequriredProducts = useSelector(
  //   (state) => state.area.getRequriredProducts
  // );
  // const addProductToArea = useSelector((state) => state.area.addProductToArea);
  // const removeProductFromArea = useSelector(
  //   (state) => state.area.removeProductFromArea
  // );
  // const { area } = useSelector((state) => state.area.getSingleArea);

  // useEffect(() => {
  //   dispatch(AllProduct());
  // }, [dispatch]);

  // const filterReqProducts = () => {
  //   const filtered = getAllProduct.products.filter(
  //     (item) =>
  //       !getRequriredProducts.requrired_products.some(
  //         (newItem) => newItem.Product._id === item._id
  //       )
  //   );
  //   setFilteredReqProducts(filtered);
  // };

  // useEffect(() => {
  //   if (areaId == area._id) {
  //     dispatch(GetRequriredProducts(areaId));
  //   }

  //   if (addProductToArea.addedProduct) {
  //     toast(addProductToArea.message);
  //     dispatch({ type: ADD_REQUIRED_PRODUCT_TO_AREA_RESET });
  //   }
  //   if (removeProductFromArea.isRemoved) {
  //     toast(removeProductFromArea.message);
  //     dispatch({ type: REMOVE_REQURIRED_PRODUCT_FROM_RESET });
  //   }
  // }, [
  //   dispatch,
  //   areaId,
  //   area,
  //   addProductToArea.addedProduct,
  //   removeProductFromArea.isRemoved,
  // ]);
  // useEffect(() => {
  //   filterReqProducts();
  // }, [
  //   areaId,
  //   area._id,
  //   addProductToArea,
  //   removeProductFromArea,
  //   getAllProduct.products,
  //   getRequriredProducts.requrired_products,
  // ]);
  // const handleRemoveProductFromArea = (productId) => {
  //   dispatch(RemoveProductFromArea(areaId, productId));
  // };
  return (
    <Drawer
      afterOpenChange={handleDrawerVisibleChange}
      width={512}
      title="Basic Drawer"
      placement="right"
      onClose={handleCloseAddReqProductDrawer}
      open={showAddReqProductDrawer}
    >
      <h2>hello</h2>
    </Drawer>
  );
};

export default AddReqProductDrawer;
