import React from "react";
import { Modal } from "antd";
import ShelterNeedForm from "../form/ShelterNeedForm";
import { useSelector } from "react-redux";
const EditShelterFormModal = ({
  form,
  showEditShelterFormModal,
  handleCloseEditShelterFormModal,
}) => {
  const getAllCity = useSelector((state) => state.cityCountry.getAllCity);

  return (
    <Modal
      centered
      title="Basic Modal"
      open={showEditShelterFormModal}
      onOk={handleCloseEditShelterFormModal}
      onCancel={handleCloseEditShelterFormModal}
      footer={null}
    >
      <ShelterNeedForm
        isEditForm={true}
        getAllCity={getAllCity}
        formItem={form}
      />
    </Modal>
  );
};

export default EditShelterFormModal;
