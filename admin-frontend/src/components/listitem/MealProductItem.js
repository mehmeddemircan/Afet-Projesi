import { Card, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { EditOutlined } from "@ant-design/icons";

import { DeleteMeal } from "../../redux/actions/MealActions";
const { Meta } = Card;
const MealProductItem = ({ meal }) => {
    const dispatch = useDispatch()
    const handleDeleteMeal = (id) => {
      dispatch(DeleteMeal(id))
    }
    // const [showEditBrandModal, setShowEditBrandModal] = useState(false)

    // const handleShowEditBrandModal = () => {
    //   setShowEditBrandModal(true)
    // }

    // const handleCloseEditBrandModal = () => {
    //   setShowEditBrandModal(false)
    // }

  return (
    <Card
      className="my-2 mx-2"
      hoverable={true}
      style={{
        width: 300,
      }}
      cover={
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <img width={300} height={200} alt="example" src={meal.image} />

          <Tooltip placement="topLeft" title="Remove">
            <button
              className="btn btn-sm "
              style={{ position: "absolute", top: 0, right: 0 }}
                 onClick={() => handleDeleteMeal(meal._id)}
            >
              <i class="fa-solid fa-x"></i>
            </button>
          </Tooltip>
        </div>
      }
    >
      <Meta
        title={meal.title}
        description={
          <>
            <p>Price : {meal.price} TL</p>

            <p>Stock : {meal.stock} Adet</p>
            <div className="d-flex flex-row justify-content-end">
              {/* <button className=" mx-2 mb-2 btn btn-sm btn-dark rounded-pill" onClick={handleShowEditClothesModal}>
                Edit
              </button>

              <EditClothesProductModal 
                item={item}
                showEditClothesModal={showEditClothesModal}
                handleCloseEditClothesModal={handleCloseEditClothesModal}
              /> */}
            </div>
          </>
        }
      />
 
    </Card>
  );
};

export default MealProductItem;
