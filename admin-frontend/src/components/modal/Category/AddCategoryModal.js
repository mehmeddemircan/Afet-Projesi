import { Modal } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AddCategory } from "../../../redux/actions/CategoryActions";

const AddCategoryModal = ({
  showAddCategoryModal,
  handleCloseAddCategoryModal,
}) => {
  const addCategory = useSelector((state) => state.category.addCategory);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleAddCategory = () => {
    dispatch(AddCategory({ name }));
   
    if (!addCategory.success) {
      handleCloseAddCategoryModal();
      setName("")
    }
  };

  return (
    <Fragment>
      <Modal
        centered
        open={showAddCategoryModal}
        onOk={handleAddCategory}
        onCancel={handleCloseAddCategoryModal}
      >
        <form>
          <div class="form-group">
            <h4 class="text-center">New Category </h4>
            <label for="recipient-name" class="col-form-label">
              Category Name
            </label>
            <input
              type="text"
              class="form-control "
              id="person-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default AddCategoryModal;
