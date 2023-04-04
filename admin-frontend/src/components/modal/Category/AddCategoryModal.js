import { Modal } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AddCategory } from "../../../redux/actions/CategoryActions";
import AddEditCategoryForm from "../../form/AddEditCategoryForm";

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
        <AddEditCategoryForm  name={name} setName={setName}/>
      </Modal>
    </Fragment>
  );
};

export default AddCategoryModal;
