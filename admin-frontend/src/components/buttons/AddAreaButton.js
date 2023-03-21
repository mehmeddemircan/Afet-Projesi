import React, { Fragment, useState } from "react";
import AddAreaModal from "../modal/Area/AddAreaModal";
import AddButton from "./AddButton";

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
      <AddButton name="Add Area" onClick={handleShowAddAreaModal} />

      <AddAreaModal
        showAddAreaModal={showAddAreaModal}
        handleCloseAddAreaModal={handleCloseAddAreaModal}
      />
    </Fragment>
  );
};

export default AddAreaButton;
