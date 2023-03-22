import React from "react";
import AddButton from "./AddButton";

const AddProductButton = ({ handleShowAddProductModal }) => {
  return (
    <div className="row my-3">
    <div className="d-flex justify-content-end">
    <AddButton name="Add Product" onClick={handleShowAddProductModal} />
    </div>
    </div>
  )
  
};

export default AddProductButton;
