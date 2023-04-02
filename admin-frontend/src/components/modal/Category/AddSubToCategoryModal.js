import { Descriptions, List, Modal } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllSubCategory } from "../../../redux/actions/SubCategoryActions";
import { AddSubToCategory } from "../../../redux/actions/CategoryActions";

const AddSubToCategoryModal = ({
  category,
  showAddSubToCategoryModal,
  handleCloseAddSubToCategoryModal,
}) => {
  const getAllSubCategory = useSelector((state) => state.subcategory.getAllSubCategory);
  const deleteUpdateCategory = useSelector(
    (state) => state.category.deleteUpdateCategory
  );
  const [sub, setSub] = useState("");
  const dispatch = useDispatch();

  const handleAddSubToCategory = (subParam) => {
    setSub(subParam);

    dispatch(AddSubToCategory(category._id, { sub }));
  };

  useEffect(() => {
    if (deleteUpdateCategory.addedSubToCategory) {
      setSub("");
      handleCloseAddSubToCategoryModal();
    }
  }, [deleteUpdateCategory.addedSubToCategory]);
  return (
    <Fragment>
      <Modal
        centered
        open={showAddSubToCategoryModal}
        footer={null}
        //  onOk={handleAddPersonType}
        onCancel={handleCloseAddSubToCategoryModal}
      >
        <Descriptions title="Category Info">
          <Descriptions.Item label="Category Name">
            {category.name}
          </Descriptions.Item>
        </Descriptions>
        <List itemLayout="horizontal">
          {getAllSubCategory.subs.map((sub) => (
            <List.Item
              key={`${category._id}-${sub._id}`}
              actions={[
                <button
                  className="btn btn-light btn-sm "
                  onClick={() => {
                    handleAddSubToCategory(sub._id);
                  }}
                >
                  Add Category
                </button>,
              ]}
            >
              <List.Item.Meta title={<a>{sub.name}</a>} />
            </List.Item>
          ))}
        </List>
      </Modal>
    </Fragment>
  );
};

export default AddSubToCategoryModal;
