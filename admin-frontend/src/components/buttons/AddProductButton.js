import React from "react";

const AddProductButton = ({handleShowAddProductModal}) => {
  return (
    <div className="row">
      <div className="d-flex justify-content-end">
        <button className="btn btn-outline-primary rounded-pill" onClick={handleShowAddProductModal}>
          {" "}
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProductButton;
