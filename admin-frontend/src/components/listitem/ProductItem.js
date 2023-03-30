import React, { Fragment, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Image, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct } from "../../redux/actions/ProductActions";
import AddProductToAreaModal from "../modal/Area/AddProductToAreaModal";
const { Meta } = Card;
const ProductItem = ({
  handleRemoveProductFromArea,
  reqProduct,
  isReqProductItem,
  product,
}) => {
  const { requrired_products, success } = useSelector(
    (state) => state.getRequriredProducts
  );

  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(DeleteProduct(product._id));
  };

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
      <Card
        hoverable
        style={{
          width: 300,
        }}
        className="my-3 mx-2"
        cover={
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <Image.PreviewGroup>
              <Image
                alt="example"
                src={
                  isReqProductItem
                    ? reqProduct.Product.images.length == 0
                      ? "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      : reqProduct.Product.images[0].url
                    : product.images.length == 0
                    ? "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    : product.images[0].url
                }
                height={182}
                width={300}
                style={{ objectFit: "cover" }}
              />
            </Image.PreviewGroup>
            {isReqProductItem ? (
              <Tooltip placement="topLeft" title="Remove ">
                <button
                  className="btn btn-sm "
                  style={{ position: "absolute", top: 0, right: 0 }}
                  onClick={() => handleRemoveProductFromArea(reqProduct._id)}
                >
                  <i class="fa-solid fa-x"></i>
                </button>
              </Tooltip>
            ) : !success ? (
              <Tooltip placement="topLeft" title="Delete">
                <button
                  className="btn btn-sm "
                  style={{ position: "absolute", top: 0, right: 0 }}
                  onClick={handleDeleteProduct}
                >
                  <i class="fa-solid fa-x"></i>
                </button>
              </Tooltip>
            ) : null}
          </div>
        }
        actions={
          !success
            ? [
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]
            : [
                isReqProductItem ? null : (
                  <button
                    className="btn btn-light btn-sm w-100 "
                    onClick={handleShowAddProductToAreaModal}
                  >
                    <i class="fa-solid fa-plus"></i> Add{" "}
                  </button>
                ),
              ]
        }
      >
        {isReqProductItem ? null : (
          <AddProductToAreaModal
            product={product}
            handleCloseAddProductToAreaModal={handleCloseAddProductToAreaModal}
            showAddProductToAreaModal={showAddProductToAreaModal}
          />
        )}
        {isReqProductItem ? (
          <Meta
            title={reqProduct.Product.title}
            description={
              <a className="text-dark" style={{ textDecorationLine: "none" }}>
                Aciliyet :{" "}
                <a style={{ color: "#1890ff" }}>{reqProduct.priorityOrder}</a>
              </a>
            }
          />
        ) : (
          <a
            style={{
              textDecoration: "none",
            }}
            href={`/urunler/${product._id}`}
          >
            <Meta
              avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
              title={product.title}
              description="This is the description"
            />
          </a>
        )}
      </Card>
    </Fragment>
  );
};

export default ProductItem;
