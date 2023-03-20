import { List } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import AddProductToAreaModal from "../modal/Area/AddProductToAreaModal";
import { useSelector } from "react-redux";

const AreaProductItem = ({ product }) => {
  const [showAddProductToAreaModal, setShowAddProductToAreaModal] =
    useState(false);

  const handleShowAddProductToAreaModal = () => {
    setShowAddProductToAreaModal(true);
  };
  const handleCloseAddProductToAreaModal = () => {
    setShowAddProductToAreaModal(false);
  };

  return (
    <Fragment>
      <List.Item
        actions={[
          <>
            <button
              className="btn btn-sm btn-light text-white rounded-pill"
              style={{ background: "#222" }}
              onClick={handleShowAddProductToAreaModal}
            >
              Add
            </button>
          </>,
        ]}
      >
         <AddProductToAreaModal
        product={product}
        handleCloseAddProductToAreaModal={handleCloseAddProductToAreaModal}
        showAddProductToAreaModal={showAddProductToAreaModal}
      />
        <List.Item.Meta
          title={<a>{product.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>

     
    </Fragment>
  );
};

export default AreaProductItem;
