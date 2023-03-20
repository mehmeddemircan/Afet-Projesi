import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AddPersonToArea } from "../../../redux/actions/AreaActions";
import { Modal } from "antd";

const AddPersonToAreaModal = ({
  personType,
  showAddPersonToAreaModal,
  handleClosePersonToAreaModal,
}) => {
  const [Person, setPerson] = useState(personType._id);
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleAddPersonToArea = () => {
    dispatch(AddPersonToArea(id, { Person, quantity }));
    handleClosePersonToAreaModal()
  };
  return (
    <Fragment>
      <Modal
        centered
        open={showAddPersonToAreaModal}
        onOk={handleAddPersonToArea}
        onCancel={handleClosePersonToAreaModal}
      >
        <form>
          <div class="form-group">
            <h4>Product Title {quantity}</h4>
            <h4>Product Title {Person}</h4>

            <p>{/* {product.title} {product._id} */}</p>
            <label for="recipient-name" class="col-form-label">
              Quantity{" "}
            </label>
            <input
              type="number"
              class="form-control "
              id="person-name"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default AddPersonToAreaModal;
