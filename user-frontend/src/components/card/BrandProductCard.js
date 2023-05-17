import { Card, Carousel, Image, message } from "antd";
import React, { useEffect, useState } from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  AddClothingToBasket,
  AddMealToBasket,
  AddShelterToBasket,
} from "../../redux/actions/UserActions";
import {
  ADD_CLOTHING_TO_BASKET_RESET,
  ADD_MEAL_TO_BASKET_RESET,
  ADD_SHELTER_TO_BASKET_RESET,
} from "../../redux/constants/UserConstants";
const { Meta } = Card;
const BrandProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const addClothingToBasket = useSelector(
    (state) => state.user.addClothingToBasket
  );
  const addShelterToBasket = useSelector(
    (state) => state.user.addShelterToBasket
  );

  const addMealToBasket = useSelector((state) => state.user.addMealToBasket)

  const [userId, setUserId] = useState(auth.user._id);
  const [clothingProductId, setClothingProductId] = useState(item._id);
  const [quantity, setQuantity] = useState(1);
  const handleAddClothingToBasket = () => {
    dispatch(AddClothingToBasket({ userId, clothingProductId, quantity }));
  };

  const [shelterProductId, setShelterProductId] = useState(item._id);
  const handleAddShelterToBasket = () => {
    dispatch(AddShelterToBasket({ userId, shelterProductId, quantity }));
  };

  const [mealProductId, setMealProductId] = useState(item._id)

  const handleAddMealToBasket = () => {
    dispatch(AddMealToBasket({userId,mealProductId,quantity}))
  }

  useEffect(() => {
    if (addClothingToBasket.isClothingAdded) {
      dispatch({ type: ADD_CLOTHING_TO_BASKET_RESET });
    }

    if (addShelterToBasket.isShelterAdded) {
      dispatch({ type: ADD_SHELTER_TO_BASKET_RESET });
    }
    if (addMealToBasket.isMealAdded) {
      dispatch({type : ADD_MEAL_TO_BASKET_RESET})
    }
  }, [
    dispatch,
    addClothingToBasket.isClothingAdded,
    addShelterToBasket.isShelterAdded,
    addMealToBasket.isMealAdded
  ]);

  return (
    <Card
      hoverable
      style={{
        width: 300,
      }}
      className="my-3 mx-2"
      actions={[
        <button
          className="btn btn-light d-inline-flex align-items-center"
          onClick={() =>
            item.brand.category === "Giyim"
              ? handleAddClothingToBasket()
              : item.category === "Ev" || item.category === "Hotel"
              ? handleAddShelterToBasket()
              : item.brand.category === "Gıda" ? handleAddMealToBasket() : null
          }
        >
          Sepete Ekle <ShoppingOutlined className="mx-2" />{" "}
        </button>,
      ]}
      cover={
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          {item.brand.category === "Giyim" ||
          item.category === "Ev" ||
          item.category === "Hotel" ? (
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
          {item.brand.category === "Gıda" && (
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
        </div>
      }
    >
      <Meta
        title={item.title}
        description={
          <>
            {item.category === "Ev-Hotel" && (
              <>
                <p>description : {item.description.substring(0, 10)} ...</p>
                {item.category == "Ev" && <p>Room : {item.roomNumber}</p>}
              </>
            )}
            <p>Price : {item.price} TL</p>
            {item.category === "Giyim" && <p>gender : {item.gender}</p>}
            <p>Stock : {item.stock} Adet</p>
          </>
        }
      />
    </Card>
  );
};

export default BrandProductCard;
