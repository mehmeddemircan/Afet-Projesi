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
        <AddButton name="Add Person" onClick={handleShowAddPersonModal} />

      <AddPersonTypeModal
        showAddPersonModal={showAddPersonModal}
        handleCloseAddPersonModal={handleCloseAddPersonModal}
      />
    </Fragment>
  );
};

export default AddPersonTypeButton;
