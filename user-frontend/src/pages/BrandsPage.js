import React, { Fragment, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GetAllClothesBrand,
  GetAllMealBrand,
  GetAllShelterBrand,
} from "../redux/actions/BrandActions";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import EmptyComponent from "../components/empty/EmptyComponent";
import BrandCard from "../components/card/BrandCard";
import BrandList from "../components/list/BrandList";

const BrandsPage = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const getBrandsByName = useSelector((state) => state.brand.getBrandsByName);
  useEffect(() => {
    if (name == "Ev-Hotel") {
      dispatch(GetAllShelterBrand());
    }
    if (name == "Gıda") {
      dispatch(GetAllMealBrand());
    }
    if (name == "Giyim") {
      dispatch(GetAllClothesBrand());
    }
  }, [dispatch, name]);

  return (
    <MainLayout>
      {getBrandsByName.loading ? (
        <LoadingSpinner />
      ) : getBrandsByName.brands.length > 0 ? (
        <BrandList />
      ) : (
        <EmptyComponent />
      )}
    </MainLayout>
  );
};

export default BrandsPage;
