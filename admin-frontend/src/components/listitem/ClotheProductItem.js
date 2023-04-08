import { Card, Carousel, Tooltip, Image, Avatar } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteClothes } from "../../redux/actions/ClothesAction";
import EditClothesProductModal from "../modal/ClothesProdcut/EditClothesProductModal";

const { Meta } = Card;
const ClotheProductItem = ({ item }) => {


  const [showEditClothesModal, setShowEditClothesModal] = useState(false)
  const handleShowEditClothesModal = () => {
    setShowEditClothesModal(true)
  }

  const handleCloseEditClothesModal = () => {
    setShowEditClothesModal(false)
  }

    const dispatch = useDispatch()
    const handleDeleteProduct = () => {
        dispatch(DeleteClothes(item._id))
    }


  return (
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
            <Carousel dotPosition="bottom" arrows>
              {item.images &&
                item.images.map((image) => (
                  <Image
                    alt="example"
                    src={image.url}
                    height={182}
                    width={300}
                    style={{ objectFit: "cover" }}
                  />
                ))}
            </Carousel>
          </Image.PreviewGroup>

          <Tooltip placement="topLeft" title="Delete Product">
            <button
              className="btn btn-md "
              style={{ position: "absolute", top: 0, right: 0 }}
              onClick={handleDeleteProduct}
            >
              <i
                class="fa-regular fa-x "
                style={{
                  fontSize: "18px",
                }}
              ></i>
            </button>
          </Tooltip>
        </div>
      }
    >
      <Meta
        title={item.title}
        description={
          <>
            <p>Price : {item.price} TL</p>
            <p>gender : {item.gender}</p>
            <p>Stock : {item.stock} Adet</p>
            <div className="d-flex flex-row justify-content-end">
              <button className=" mx-2 mb-2 btn btn-sm btn-dark rounded-pill" onClick={handleShowEditClothesModal}>
                Edit
              </button>

              <EditClothesProductModal 
                item={item}
                showEditClothesModal={showEditClothesModal}
                handleCloseEditClothesModal={handleCloseEditClothesModal}
              />
            </div>
          </>
        }
      />
    </Card>
  );
};

export default ClotheProductItem;
