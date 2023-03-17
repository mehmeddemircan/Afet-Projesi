import React, { Fragment, useState } from "react";
import AddPersonTypeModal from "../modal/PersonType/AddPersonTypeModal";

const AddPersonTypeButton = () => {
  const [showAddPersonModal, setShowAddPersonModal] = useState(false);

  const handleShowAddPersonModal = () => {
    setShowAddPersonModal(true);
  };

  const handleCloseAddPersonModal = () => {
    setShowAddPersonModal(false);
  };

  return (
    <Fragment>
      <div className="row my-3">
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-primary rounded-3"
            onClick={handleShowAddPersonModal}
          >
            {" "}
            Add PersonType
          </button>
        </div>
      </div>

      <AddPersonTypeModal
        showAddPersonModal={showAddPersonModal}
        handleCloseAddPersonModal={handleCloseAddPersonModal}
      />
    </Fragment>
  );
};

export default AddPersonTypeButton;
