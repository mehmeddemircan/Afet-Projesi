import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserClothingBasket } from "../../redux/actions/UserActions";
import { Carousel, Image, List, message } from "antd";
import ClothingBasketItem from "../listItem/ClothingBasketItem";
import LoadingSpinner from "../spinner/LoadingSpinner";
import EmptyComponent from "../empty/EmptyComponent";
import { ADD_CLOTHING_TO_BASKET_RESET, REMOVE_CLOTHING_FROM_BASKET_RESET } from "../../redux/constants/UserConstants";
import BasketInfoCard from "../card/BasketInfoCard";

const ClohingBasketSegment = () => {
  const auth = useSelector((state) => state.auth);
  const getUserClothingBasket = useSelector(
    (state) => state.user.getUserClothingBasket
  );
  const addClothingToBasket = useSelector((state) => state.user.addClothingToBasket)
  const removeClothingFromBasket = useSelector((state) => state.user.removeClothingFromBasket)
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserClothingBasket(auth.user._id));
    if (addClothingToBasket.isClothingAdded) {
        message.success(addClothingToBasket.message)
        dispatch({type : ADD_CLOTHING_TO_BASKET_RESET})
    }
    if (removeClothingFromBasket.isClothingRemoved) {
        message.success(removeClothingFromBasket.message)
        dispatch({type : REMOVE_CLOTHING_FROM_BASKET_RESET})
    }
  }, [dispatch, auth,addClothingToBasket.isClothingAdded,removeClothingFromBasket.isClothingRemoved]);




  return (
    <Fragment>
          {getUserClothingBasket.loading ? <LoadingSpinner /> : getUserClothingBasket.clothingBasket.length === 0 ? <EmptyComponent /> : 
        <div className="d-flex flex-row">
              <List itemLayout="vertical" className="col-md-8">
        {getUserClothingBasket.clothingBasket.map((item) => (
            <ClothingBasketItem key={item._id} item={item} />
        ))}
      
      </List>
      <BasketInfoCard />
        </div>
}
    </Fragment>
  );
};

export default ClohingBasketSegment;
