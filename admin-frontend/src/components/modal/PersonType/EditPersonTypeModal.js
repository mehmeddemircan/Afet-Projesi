import { Modal } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePersonType } from "../../../redux/actions/PersonTypeActions";
import { toast } from "react-toastify";
import AddEditPersonTypeForm from "../../form/AddEditPersonTypeForm";

const EditPersonTypeModal = ({
  showEditPersonModal,
  handleCloseEditPersonModal,
  personType,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(personType.name);
  const deleteUpdatePersonType = useSelector(
    (state) => state.personType.deleteUpdatePersonType
  );
  const handleEditPersonTpe = () => {
    dispatch(UpdatePersonType(personType._id, { name }));

    if (!deleteUpdatePersonType.updateSuccess) {
      handleCloseEditPersonModal();
      toast("Successfully edited")
    }
  };

  return (
    <Fragment>
      <Modal
        centered
        open={showEditPersonModal}
        onOk={handleEditPersonTpe}
        onCancel={handleCloseEditPersonModal}
      >
      <AddEditPersonTypeForm 
        name={name}
        setName={setName}
      />
      </Modal>
    </Fragment>
  );
};

export default EditPersonTypeModal;
