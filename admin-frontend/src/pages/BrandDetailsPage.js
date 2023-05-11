import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleBrand } from "../redux/actions/BrandActions";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import FiltersButton from "../components/map/FiltersButton";

import EmptyComponent from "../components/empty/EmptyComponent";
import AddClothesProductModal from "../components/modal/ClothesProdcut/AddClothesProductModal";
import { message } from "antd";
import {
  ADD_CLOTHES_RESET,
  DELETE_CLOTHES_RESET,
  UPDATE_CLOTHES_RESET,
} from "../redux/constants/ClothesConstants";

import { AllClothesByBrand } from "../redux/actions/ClothesAction";
import { AllMealByBrand } from "../redux/actions/MealActions";
import {
  ADD_MEAL_RESET,
  DELETE_MEAL_RESET,
  UPDATE_MEAL_RESET,
} from "../redux/constants/MealConstants";
import AddMealModal from "../components/modal/MealProduct/AddMealModal";

import AddShelterModal from "../components/modal/ShelterProduct/AddShelterModal";
import { AllShelterByBrand } from "../redux/actions/ShelterActions";
import {
  ADD_SHELTER_RESET,
  DELETE_SHELTER_RESET,
  UPDATE_SHELTER_RESET,
} from "../redux/constants/ShelterConstants";

import BrandProductItem from "../components/listitem/BrandProductItem";
import MetaTitle from "../meta/MetaTitle";
const BrandDetailsPage = () => {
  const { brandId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getSingleBrand = useSelector((state) => state.brand.getSingleBrand);
  const addClothes = useSelector((state) => state.clothes.addClothes);
  const getAllClothes = useSelector((state) => state.clothes.getAllClothes);
  const deleteUpdateClothes = useSelector(
    (state) => state.clothes.deleteUpdateClothes
  );

  const addMeal = useSelector((state) => state.mealProduct.addMeal);
  const deleteUpdateMeal = useSelector(
    (state) => state.mealProduct.deleteUpdateMeal
  );
  const getAllMealByBrand = useSelector(
    (state) => state.mealProduct.getAllMealByBrand
  );
  const addShelter = useSelector((state) => state.shelter.addShelter);
  const getAllShelterByBrand = useSelector(
    (state) => state.shelter.getAllShelterByBrand
  );
  const deleteUpdateShelter = useSelector(
    (state) => state.shelter.deleteUpdateShelter
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
    if (getSingleBrand.brand.category === "Giyim") {
      dispatch(AllClothesByBrand(brandId));
      if (addClothes.isAdded) {
        message.success(addClothes.message);
        dispatch({ type: ADD_CLOTHES_RESET });
      }
      if (deleteUpdateClothes.isDeleted) {
        message.success(deleteUpdateClothes.message);
        dispatch({ type: DELETE_CLOTHES_RESET });
      }
      if (deleteUpdateClothes.isUpdated) {
        message.success(deleteUpdateClothes.message);
        dispatch({ type: UPDATE_CLOTHES_RESET });
      }
    }
  }, [
    dispatch,
    getSingleBrand.brand.category,
    addClothes.isAdded,
    deleteUpdateClothes.isDeleted,
    deleteUpdateClothes.isUpdated,
  ]);

  useEffect(() => {
    if (getSingleBrand.brand.category === "Gıda") {
      dispatch(AllMealByBrand(brandId));
      if (addMeal.isAdded) {
        message.success(addMeal.message);
        dispatch({ type: ADD_MEAL_RESET });
      }
      if (deleteUpdateMeal.isDeleted) {
        message.success(deleteUpdateMeal.message);
        dispatch({ type: DELETE_MEAL_RESET });
      }
      if (deleteUpdateMeal.isUpdated) {
        message.success(deleteUpdateMeal.message)
        dispatch({type  :UPDATE_MEAL_RESET})
      }
    }
  }, [
    dispatch,
    getSingleBrand.brand.category,
    addMeal.isAdded,
    deleteUpdateMeal.isDeleted,
    deleteUpdateMeal.isUpdated
  ]);

  useEffect(() => {
    if (getSingleBrand.brand.category === "Ev-Hotel") {
      dispatch(AllShelterByBrand(brandId));
      if (addShelter.isAdded) {
        message.success(addShelter.message);
        dispatch({ type: ADD_SHELTER_RESET });
      }
      if (deleteUpdateShelter.isDeleted) {
        message.success(deleteUpdateShelter.message);
        dispatch({ type: DELETE_SHELTER_RESET });
      }
      if (deleteUpdateShelter.isUpdated) {
        message.success(deleteUpdateShelter.message)
        dispatch({type : UPDATE_SHELTER_RESET})
      }
    }
  }, [
    dispatch,
    getSingleBrand.brand.category,
    addShelter.isAdded,
    deleteUpdateShelter.isDeleted,
    deleteUpdateShelter.isUpdated
  ]);

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

  const [showAddShelterModal, setShowAddShelterModal] = useState(false);
  const handleShowAddShelterModal = () => {
    setShowAddShelterModal(true);
  };

  const handleCloseAddShelterModal = () => {
    setShowAddShelterModal(false);
  };

  return (
    <MainLayout>
      <MetaTitle title={`${getSingleBrand.brand.name} Detayları `} name="detaylar" content="detaylar" />
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
                ? handleShowAddShelterModal
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
          <AddShelterModal
            showAddShelterModal={showAddShelterModal}
            handleCloseAddShelterModal={handleCloseAddShelterModal}
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
              <BrandProductItem
                isClothesProduct={true}
                key={item._id}
                item={item}
              />
            ))
          ) : (
            <EmptyComponent />
          )
        ) : getSingleBrand.brand.category === "Gıda" ? (
          getAllMealByBrand.meals && getAllMealByBrand.meals.length > 0 ? (
            getAllMealByBrand.meals.map((item) => (
              <BrandProductItem
                isMealProduct={true}
                key={item._id}
                item={item}
              />
            ))
          ) : (
            <EmptyComponent />
          )
        ) : getSingleBrand.brand.category === "Ev-Hotel" ? (
          getAllShelterByBrand.shelters &&
          getAllShelterByBrand.shelters.length > 0 ? (
            getAllShelterByBrand.shelters.map((item) => (
              <BrandProductItem
                isShelterProduct={true}
                key={item._id}
                item={item}
              />
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
