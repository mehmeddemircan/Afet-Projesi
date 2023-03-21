import React from "react";
import AddButton from "./AddButton";

const AddProductButton = ({ handleShowAddProductModal }) => {
  return <AddButton name="Add Product" onClick={handleShowAddProductModal} />;
};

export default AddProductButton;
