import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AddPersonToArea } from "../../../redux/actions/AreaActions";
import { Modal } from "antd";

import AddReqToAreaForm from "../../form/AddReqToAreaForm";

const AddPersonToAreaModal = ({
  personType,
  showAddPersonToAreaModal,
  handleClosePersonToAreaModal,
}) => {
  const [Person, setPerson] = useState(personType._id);
  const [quantity, setQuantity] = useState(0);

  const [priorityOrder, setPriorityOrder] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleAddPersonToArea = () => {
    dispatch(AddPersonToArea(id, { Person, quantity, priorityOrder }));
    handleClosePersonToAreaModal();
  };

  return (
    <Fragment>
      <Modal
        centered
        open={showAddPersonToAreaModal}
        onOk={handleAddPersonToArea}
        onCancel={handleClosePersonToAreaModal}
        title={<h3>{personType.name}</h3>}
      >
        <AddReqToAreaForm
          quantity={quantity}
          setQuantity={setQuantity}
          priorityOrder={priorityOrder}
          setPriorityOrder={setPriorityOrder}
        />
      </Modal>
    </Fragment>
  );
};

export default AddPersonToAreaModal;
