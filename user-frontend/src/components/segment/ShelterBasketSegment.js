import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../spinner/LoadingSpinner";
import EmptyComponent from "../empty/EmptyComponent";
import { List, message } from "antd";
import ShelterBasketItem from "../listItem/ShelterBasketItem";
import { GetUserShelterBasket } from "../../redux/actions/UserActions";
import BasketInfoCard from "../card/BasketInfoCard";
import { ADD_SHELTER_TO_BASKET_RESET, REMOVE_SHELTER_FROM_BASKET_RESET } from "../../redux/constants/UserConstants";

const ShelterBasketSegment = () => {
  const getUserShelterBasket = useSelector(
    (state) => state.user.getUserShelterBasket
  );
  const auth = useSelector((state) => state.auth);

  const addShelterToBasket = useSelector((state) => state.user.addShelterToBasket)
  const removeShelterFromBasket = useSelector((state) => state.user.removeShelterFromBasket)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserShelterBasket(auth.user._id));
    if (addShelterToBasket.isShelterAdded) {
        dispatch({type : ADD_SHELTER_TO_BASKET_RESET})
    }
    if (removeShelterFromBasket.isShelterRemoved) {
        message.success(removeShelterFromBasket.message)
        dispatch({type :REMOVE_SHELTER_FROM_BASKET_RESET})
    }
  }, [dispatch, auth,addShelterToBasket.isShelterAdded,removeShelterFromBasket.isShelterRemoved]);

  return (
    <Fragment>
      {getUserShelterBasket.loading ? (
        <LoadingSpinner />
      ) : getUserShelterBasket.shelterBasket.length === 0 ? (
        <EmptyComponent />
      ) : (
        <div className="d-flex flex-row">
          <List className="col-md-8">
            {getUserShelterBasket.shelterBasket.map((item) => (
              <ShelterBasketItem key={item._id} item={item} />
            ))}
          </List>
          <BasketInfoCard />
        </div>
      )}
    </Fragment>
  );
};

export default ShelterBasketSegment;
