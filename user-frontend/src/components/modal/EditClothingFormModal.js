import React from "react";
import { Modal } from "antd";
import ClothingNeedForm from "../form/ClothingNeedForm";
const EditClothingFormModal = ({
  handleCloseEditClothingFormModal,
  showEditClothingFormModal,
  form
}) => {
  return (
    <Modal
      centered
      title="Basic Modal"
      open={showEditClothingFormModal}
      onOk={handleCloseEditClothingFormModal}
      onCancel={handleCloseEditClothingFormModal}
      footer={null}
    >
      <ClothingNeedForm isEditForm={true} formItem={form} />
    </Modal>
  );
};

export default EditClothingFormModal;
