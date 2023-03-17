import React, { Fragment, useState } from "react";
import AddAreaModal from "../modal/Area/AddAreaModal";

const AddAreaButton = () => {
  const [showAddAreaModal, setShowAddAreaModal] = useState(false);

  const handleShowAddAreaModal = () => {
    setShowAddAreaModal(true);
  };

  const handleCloseAddAreaModal = () => {
    setShowAddAreaModal(false);
  };

  return (
    <Fragment>
      <div className="row my-3">
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-primary rounded-3"
            onClick={handleShowAddAreaModal}
          >
            {" "}
            Add New Area
          </button>
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
