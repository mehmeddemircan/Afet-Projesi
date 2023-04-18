import { Card, Carousel, Image, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteClothes } from "../../redux/actions/ClothesAction";
import EditClothesProductModal from "../modal/ClothesProdcut/EditClothesProductModal";
import EditMealModal from "../modal/MealProduct/EditMealModal";
import { DeleteMeal } from "../../redux/actions/MealActions";
import EditShelterModal from "../modal/ShelterProduct/EditShelterModal";
import { DeleteShelter } from "../../redux/actions/ShelterActions";
const { Meta } = Card;
const BrandProductItem = ({
  item,
  isClothesProduct,
  isMealProduct,
  isShelterProduct,
}) => {
  const [showEditClothesModal, setShowEditClothesModal] = useState(false);
  const handleShowEditClothesModal = () => {
    setShowEditClothesModal(true);
  };

  const handleCloseEditClothesModal = () => {
    setShowEditClothesModal(false);
  };

  const dispatch = useDispatch();
  const handleDeleteClothesProduct = () => {
    dispatch(DeleteClothes(item._id));
  };

  const handleDeleteMeal = () => {
    dispatch(DeleteMeal(item._id));
  };

  const [showEditMealModal, setShowEditMealModal] = useState(false);

  const handleShowEditMealModal = () => {
    setShowEditMealModal(true);
  };

  const handleCloseEditMealModal = () => {
    setShowEditMealModal(false);
  };

  const handleDeleteShelter = () => {
    dispatch(DeleteShelter(item._id));
  };

  const [showEditShelterModal, setShowEditShelterModal] = useState(false);

  const handleShowEditShelterModal = () => {
    setShowEditShelterModal(true);
  };

  const handleCloseEditShelterModal = () => {
    setShowEditShelterModal(false);
  };

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
          {isClothesProduct || isShelterProduct ? (
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
          ) : null}
          {isMealProduct && (
            <Image.PreviewGroup>
              <Image
                alt="example"
                src={item.image}
                height={182}
                width={300}
                style={{ objectFit: "cover" }}
              />
            </Image.PreviewGroup>
          )}
          <Tooltip placement="topLeft" title="Delete Product">
            <button
              className="btn btn-md "
              style={{ position: "absolute", top: 0, right: 0 }}
              onClick={
                isClothesProduct
                  ? handleDeleteClothesProduct
                  : isMealProduct
                  ? handleDeleteMeal
                  : isShelterProduct
                  ? handleDeleteShelter
                  : null
              }
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
            {isShelterProduct && (
              <>
                <p>description : {item.description.substring(0, 10)} ...</p>
                {item.category == "Ev" && <p>Room : {item.roomNumber}</p>}
              </>
            )}
            <p>Price : {item.price} TL</p>
            {isClothesProduct && <p>gender : {item.gender}</p>}
            <p>Stock : {item.stock} Adet</p>
            <div className="d-flex flex-row justify-content-end ">
              <button
                className="me-2 mb-1 btn btn-sm btn-dark rounded-pill"
                style={{ position: "absolute", bottom: 0, right: 0 }}
                onClick={
                  isClothesProduct
                    ? handleShowEditClothesModal
                    : isMealProduct
                    ? handleShowEditMealModal
                    : isShelterProduct
                    ? handleShowEditShelterModal
                    : null
                }
              >
                Edit
              </button>
            </div>
            {isClothesProduct && (
              <EditClothesProductModal
                item={item}
                showEditClothesModal={showEditClothesModal}
                handleCloseEditClothesModal={handleCloseEditClothesModal}
              />
            )}
            {isMealProduct && (
              <EditMealModal
                item={item}
                showEditMealModal={showEditMealModal}
                handleCloseEditMealModal={handleCloseEditMealModal}
              />
            )}
            {isShelterProduct && (
              <EditShelterModal
                item={item}
                showEditShelterModal={showEditShelterModal}
                handleCloseEditShelterModal={handleCloseEditShelterModal}
              />
            )}
          </>
        }
      />
    </Card>
  );
};

export default BrandProductItem;
