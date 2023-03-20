import { Modal } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { AddProductToArea } from "../../../redux/actions/AreaActions";
import { useParams } from "react-router-dom";

const AddProductToAreaModal = ({
  product,
  showAddProductToAreaModal,
  handleCloseAddProductToAreaModal,
}) => { 

   const {id} =   useParams()

    const [areaId, setAreaId] = useState(id)
    const [Product, setProduct] = useState(product._id)
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch()
  const handleAddProductToArea = () => {
    dispatch(AddProductToArea(areaId,{Product,quantity}))
    handleCloseAddProductToAreaModal()
  }
  

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
            <p>
              {/* {product.title} {product._id} */}
            </p>
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

export default AddProductToAreaModal;
