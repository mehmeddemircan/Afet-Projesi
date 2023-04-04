import { Modal, Select } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { AddProductToArea } from "../../../redux/actions/AreaActions";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AddReqToAreaForm from "../../form/AddReqToAreaForm";
const { Option } = Select;
const AddProductToAreaModal = ({
  product,
  showAddProductToAreaModal,
  handleCloseAddProductToAreaModal,
}) => {
  const { id } = useParams();

  const [areaId, setAreaId] = useState(id);
  const [Product, setProduct] = useState(product._id);
  const [quantity, setQuantity] = useState(0);
  const [priorityOrders, setPriorityOrders] = useState([
    "Cok Acil",
    "Acil",
    "Normal",
    "Acil Degil",
  ]);
  const [priorityOrder, setPriorityOrder] = useState("");
  const dispatch = useDispatch();
  const handleAddProductToArea = () => {
    dispatch(AddProductToArea(areaId, { Product, quantity, priorityOrder }));
    handleCloseAddProductToAreaModal();
  };

  const [showPrioritySelect, setShowPrioritySelect] = useState(false);

  const handleShowPrioritySelect = () => {
    setShowPrioritySelect(true);
  };

  const handleClosePrioritySelect = () => {
    setShowPrioritySelect(false);
  };

  return (
    <Fragment>
      <Modal
        centered
        open={showAddProductToAreaModal}
        onOk={handleAddProductToArea}
        onCancel={handleCloseAddProductToAreaModal}
        title={<h3>{product.title}</h3>}
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

export default AddProductToAreaModal;
