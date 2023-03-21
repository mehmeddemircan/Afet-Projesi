import React from "react";

const AddSubToCategoryButton = ({ handleShowAddSubToCategoryModal }) => {
  return (
    <button
      className="btn btn-sm btn-light rounded-pill"
      onClick={handleShowAddSubToCategoryModal}
    >
      {" "}
      <i class="fa-solid fa-plus me-2"></i>Sub
    </button>
  );
};

export default AddSubToCategoryButton;
