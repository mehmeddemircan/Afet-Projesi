import { Modal, Select } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { AddProductToArea } from "../../../redux/actions/AreaActions";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
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
      >
        <form>
          <div class="form-group">
            <h3>{product.title}</h3>
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
            {showPrioritySelect ? (
              <div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <label for="recipient-name" class="col-form-label">
                    Priority Order{" "}
                  </label>
                  <button
                    className="btn btn-light btn-sm"
                    onClick={handleClosePrioritySelect}
                  >
                    <i class="fa-solid fa-x"></i>
                  </button>
                  <div></div>
                </div>
                <select
                  className="form-control"
                  style={{ width: 240 }}
                  placeholder="Select Priority"
                  value={priorityOrder}
                  onChange={(e) => setPriorityOrder(e.target.value)}
                >
                  <option selected>Select priority</option>
                  {priorityOrders.map((c) => (
                    <option key={`1-${c}`} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <button
                className="btn btn-light btn-sm rounded-3 mt-4"
                style={{ border: "2px solid rgb(221,221,221)" }}
                type="button"
                onClick={handleShowPrioritySelect}
              >
                Add Priority
              </button>
            )}
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default AddProductToAreaModal;
