import React, { Fragment, useState } from "react";
import AddPersonTypeModal from "../modal/PersonType/AddPersonTypeModal";
import AddButton from "./AddButton";

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
        <AddButton name="Add Person" onClick={handleShowAddPersonModal} />
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
