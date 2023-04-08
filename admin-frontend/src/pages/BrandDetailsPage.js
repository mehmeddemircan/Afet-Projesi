import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleBrand } from "../redux/actions/BrandActions";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import FiltersButton from "../components/map/FiltersButton";

import ClotheProductItem from "../components/listitem/ClotheProductItem";
import EmptyComponent from "../components/empty/EmptyComponent";
import AddClothesProductModal from "../components/modal/ClothesProdcut/AddClothesProductModal";
import { message } from "antd";
import {
  ADD_CLOTHES_RESET,
  DELETE_CLOTHES_RESET,
} from "../redux/constants/ClothesConstants";

import AddHotelModal from "../components/modal/ClothesProdcut/AddHotelModal";
import { AllClothesByBrand } from "../redux/actions/ClothesAction";
import { AllMealByBrand } from "../redux/actions/MealActions";
import {
  ADD_MEAL_RESET,
  DELETE_MEAL_RESET,
} from "../redux/constants/MealConstants";
import AddMealModal from "../components/modal/Meal/AddMealModal";

import MealProductItem from "../components/listitem/MealProductItem";
const BrandDetailsPage = () => {
  const { brandId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getSingleBrand = useSelector((state) => state.brand.getSingleBrand);
  const addClothes = useSelector((state) => state.clothes.addClothes);
  const addMeal = useSelector((state) => state.mealProduct.addMeal);
  const deleteUpdateMeal = useSelector(
    (state) => state.mealProduct.deleteUpdateMeal
  );
  const getAllMealByBrand = useSelector(
    (state) => state.mealProduct.getAllMealByBrand
  );
  const getAllClothes = useSelector((state) => state.clothes.getAllClothes);

  const deleteUpdateClothes = useSelector(
    (state) => state.clothes.deleteUpdateClothes
  );
  //düzenlenecek
  useEffect(() => {
    dispatch(GetSingleBrand(brandId));

    if (getSingleBrand.brand.category === "Giyim") {
      dispatch(AllClothesByBrand(brandId));
    }
    if (getSingleBrand.brand.category === "Gıda") {
      dispatch(AllMealByBrand(brandId));
    }
  }, [dispatch, getSingleBrand.brand.category]);

  useEffect(() => {
    dispatch(AllClothesByBrand(brandId));
    if (addClothes.isAdded) {
      message.success(addClothes.message);
      dispatch({ type: ADD_CLOTHES_RESET });
    }
    if (deleteUpdateClothes.isDeleted) {
      message.success(deleteUpdateClothes.message);
      dispatch({ type: DELETE_CLOTHES_RESET });
    }
  }, [dispatch, addClothes.isAdded, deleteUpdateClothes.isDeleted]);

  useEffect(() => {
    dispatch(AllMealByBrand(brandId));
    if (addMeal.isAdded) {
      message.success(addMeal.message);
      dispatch({ type: ADD_MEAL_RESET });
    }
    if (deleteUpdateMeal.isDeleted) {
      message.success(deleteUpdateMeal.message);
      dispatch({ type: DELETE_MEAL_RESET });
    }
  }, [dispatch, addMeal.isAdded, deleteUpdateMeal.isDeleted]);

  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const handleShowAddProductModal = () => {
    setShowAddProductModal(true);
  };

  const handleCloseAddProductModal = () => {
    setShowAddProductModal(false);
  };

  const [showAddMealModal, setShowAddMealModal] = useState(false);

  const handleShowAddMealModal = () => {
    setShowAddMealModal(true);
  };

  const handleCloseAddMealModal = () => {
    setShowAddMealModal(false);
  };

  const [showAddHotelModal, setShowAddHotelModal] = useState(false);
  const handleShowAddHotelModal = () => {
    setShowAddHotelModal(true);
  };

  const handleCloseAddHotelModal = () => {
    setShowAddHotelModal(false);
  };

  return (
    <MainLayout>
      <div>
        <InfoBreadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: (
                <a href="/markalar" onClick={(e) => e.preventDefault()}>
                  Markalar
                </a>
              ),
            },
            {
              title: (
                <>
                  <a onClick={(e) => e.preventDefault()}>
                    {getSingleBrand.brand.name}
                  </a>
                </>
              ),
            },
          ]}
        />
      </div>
      <h4>{getSingleBrand.brand.name}</h4>
      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-light"
          onClick={() => navigate("/markalar", { replace: true })}
        >
          <i class="fa-solid fa-angle-left"></i> Geri
        </button>
        <div className="d-inline-flex">
          <button
            className="btn btn-outline-primary rounded-pill"
            onClick={
              getSingleBrand.brand.category === "Giyim"
                ? handleShowAddProductModal
                : getSingleBrand.brand.category === "Gıda"
                ? handleShowAddMealModal
                : getSingleBrand.brand.category === "Ev-Hotel"
                ? handleShowAddHotelModal
                : null
            }
          >
            {getSingleBrand.brand.category === "Giyim"
              ? "Add Clothes"
              : getSingleBrand.brand.category === "Gıda"
              ? "Add Meal"
              : getSingleBrand.brand.category === "Ev-Hotel"
              ? "Add House-Hotel"
              : "Add"}
          </button>
          <AddClothesProductModal
            showAddProductModal={showAddProductModal}
            handleCloseAddProductModal={handleCloseAddProductModal}
          />
          <AddMealModal
            showAddMealModal={showAddMealModal}
            handleCloseAddMealModal={handleCloseAddMealModal}
          />
          <AddHotelModal
            showAddHotelModal={showAddHotelModal}
            handleCloseAddHotelModal={handleCloseAddHotelModal}
          />

          <FiltersButton>Filter Product</FiltersButton>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-start">
        {getSingleBrand &&
        getSingleBrand.brand &&
        getSingleBrand.brand.category === "Giyim" ? (
          getAllClothes.clothes && getAllClothes.clothes.length > 0 ? (
            getAllClothes.clothes.map((item) => (
              <ClotheProductItem key={item._id} item={item} />
            ))
          ) : (
            <EmptyComponent />
          )
        ) : getSingleBrand.brand.category === "Gıda" ? (
          getAllMealByBrand.meals && getAllMealByBrand.meals.length > 0 ? (
            getAllMealByBrand.meals.map((meal) => (
              <MealProductItem key={meal._id} meal={meal} />
            ))
          ) : (
            <EmptyComponent />
          )
        ) : null}
      </div>
    </MainLayout>
  );
};

export default BrandDetailsPage;
