import { List, Space, Tag } from "antd";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card } from "antd";
import AddSubToCategoryButton from "../buttons/AddSubToCategoryButton";
import DeleteCategoryButton from "../buttons/DeleteCategoryButton";
import EditCategoryButton from "../buttons/EditCategoryButton";
import { DeleteCategory } from "../../redux/actions/CategoryActions";
import EditCategoryModal from "../modal/Category/EditCategoryModal";
import AddSubToCategoryModal from "../modal/Category/AddSubToCategoryModal";
const { Meta } = Card;
const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();

  const handleDeleteCategory = (id) => {
    dispatch(DeleteCategory(id));
  };

  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);

  const handleShowEditCategoryModal = () => {
    setShowEditCategoryModal(true);
  };

  const handleCloseEditCategoryModal = () => {
    setShowEditCategoryModal(false);
  };

  const [showAddSubToCategoryModal, setShowAddSubToCategoryModal] =
    useState(false);

  const handleShowAddSubToCategoryModal = () => {
    setShowAddSubToCategoryModal(true);
  };

  const handleCloseAddSubToCategoryModal = () => {
    setShowAddSubToCategoryModal(false);
  };
  
  return (
    <Fragment>
      <Card
        className="my-2 mx-2"
        hoverable={true}
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <AddSubToCategoryButton
            handleShowAddSubToCategoryModal={handleShowAddSubToCategoryModal}
          />,

          <EditCategoryButton
            handleShowEditCategoryModal={handleShowEditCategoryModal}
          />,

          <DeleteCategoryButton
            handleDeleteCategory={handleDeleteCategory}
            category={category}
          />,
        ]}
      >
        <AddSubToCategoryModal
          category={category}
          showAddSubToCategoryModal={showAddSubToCategoryModal}
          handleCloseAddSubToCategoryModal={handleCloseAddSubToCategoryModal}
        />
        <EditCategoryModal
          category={category}
          key={category._id}
          showEditCategoryModal={showEditCategoryModal}
          handleCloseEditCategoryModal={handleCloseEditCategoryModal}
        />
        ,
        <Meta
          title={category.name}
          description={
            <Fragment>
              <div className="row mx-auto mb-1">SubCategory</div>
              <div className="d-flex justify-content-start">
                <Space size={[0, 4]} wrap>
                  {category.subs.map((item) => (
                    <Tag key={item._id}>{item.name}</Tag>
                  ))}
                </Space>
              </div>
            </Fragment>
          }
        />
      </Card>
    </Fragment>
  );
};

export default CategoryItem;
