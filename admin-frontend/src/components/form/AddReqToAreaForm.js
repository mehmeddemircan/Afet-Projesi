import React, { useState } from "react";

const AddReqToAreaForm = ({
  quantity,
  setQuantity,
  priorityOrder,
  setPriorityOrder,
}) => {

const [priorityOrders, setPriorityOrders] = useState([
        "Cok Acil",
        "Acil",
        "Normal",
        "Acil Degil",
      ]);
  const [showPrioritySelect, setShowPrioritySelect] = useState(false);

  const handleShowPrioritySelect = () => {
    setShowPrioritySelect(true);
  };

  const handleClosePrioritySelect = () => {
    setShowPrioritySelect(false);
  };

  return (
    <form>
      <div class="form-group">
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
      {/* button  */}

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
              <option key={c} value={c}>
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
    </form>
  );
};

export default AddReqToAreaForm;
