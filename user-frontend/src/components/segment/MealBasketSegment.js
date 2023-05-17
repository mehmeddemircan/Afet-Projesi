import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserMealBasket } from "../../redux/actions/UserActions";
import LoadingSpinner from "../spinner/LoadingSpinner";
import EmptyComponent from "../empty/EmptyComponent";
import { List, message } from "antd";
import BasketInfoCard from "../card/BasketInfoCard";
import MealBasketItem from "../listItem/MealBasketItem";
import {
  ADD_MEAL_TO_BASKET_RESET,
  REMOVE_MEAL_FROM_BASKET_RESET,
} from "../../redux/constants/UserConstants";

const MealBasketSegment = () => {
  const auth = useSelector((state) => state.auth);
  const getUserMealBasket = useSelector(
    (state) => state.user.getUserMealBasket
  );
  const addMealToBasket = useSelector((state) => state.user.addMealToBasket);
  const removeMealFromBasket = useSelector(
    (state) => state.user.removeMealFromBasket
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUserMealBasket(auth.user._id));
    if (addMealToBasket.isMealAdded) {
      dispatch({ type: ADD_MEAL_TO_BASKET_RESET });
    }
    if (removeMealFromBasket.isMealRemoved) {
      message.success(removeMealFromBasket.message);
      dispatch({ type: REMOVE_MEAL_FROM_BASKET_RESET });
    }
  }, [
    dispatch,
    auth,
    addMealToBasket.isMealAdded,
    removeMealFromBasket.isMealRemoved,
  ]);

  return (
    <Fragment>
      {getUserMealBasket.loading ? (
        <LoadingSpinner />
      ) : getUserMealBasket.mealBasket.length === 0 ? (
        <EmptyComponent />
      ) : (
        <div className="d-flex flex-row">
          <List className="col-md-8">
            {getUserMealBasket.mealBasket.map((item) => (
              <MealBasketItem key={item._id} item={item} />
            ))}
          </List>
          <BasketInfoCard />
        </div>
      )}
    </Fragment>
  );
};

export default MealBasketSegment;
