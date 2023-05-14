import React, { Fragment, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetAllClothesBrand,
  GetAllMealBrand,
  GetAllShelterBrand,
} from "../redux/actions/BrandActions";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import EmptyComponent from "../components/empty/EmptyComponent";
import BrandCard from "../components/card/BrandCard";
import BrandList from "../components/list/BrandList";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadCrumb";

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
  const navigate = useNavigate();
  return (
    <MainLayout>
      <InfoBreadcrumb
        items={[
          {
            title: "Home",
          },
         
          {
            title: (
              <>
                <a onClick={(e) => e.preventDefault()}>{name}</a>
              </>
            ),
          },
        ]}
      />

      <h4>{name} Markalarımız</h4>
      <div className="d-flex flex-row justify-content-between my-4">
        <button
          className="btn btn-light"
          onClick={() => navigate(`/`, { replace: true })}
        >
          <i class="fa-solid fa-angle-left"></i> Geri
        </button>
        <button
          className="btn btn-dark rounded-pill"
         
        >
            Filtrele <i class="fa-solid fa-filter"></i>
        </button>
      </div>

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
