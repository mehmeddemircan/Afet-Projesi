import { Modal } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCategory } from "../../../redux/actions/CategoryActions";
import AddEditCategoryForm from "../../form/AddEditCategoryForm";

const EditCategoryModal = ({
  category,
  showEditCategoryModal,
  handleCloseEditCategoryModal,
}) => {
  const deleteUpdateCategory = useSelector(
    (state) => state.category.deleteUpdateCategory
  );
  const [name, setName] = useState(category.name);
  const dispatch = useDispatch();
  const handleUpdateCategory = () => {
    dispatch(UpdateCategory(category._id, { name }));
    if (!deleteUpdateCategory.updateSuccess) {
      handleCloseEditCategoryModal();
    }
  };

  return (
    <Fragment>
      <Modal
        centered
        open={showEditCategoryModal}
        onOk={handleUpdateCategory}
        onCancel={handleCloseEditCategoryModal}
      >
        <AddEditCategoryForm name={name} setName={setName} />
      </Modal>
    </Fragment>
  );
};

export default EditCategoryModal;
