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
import { ADD_CLOTHES_RESET } from "../redux/constants/ClothesConstants";

const BrandDetailsPage = () => {
  const { brandId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getSingleBrand = useSelector((state) => state.brand.getSingleBrand);
  const addClothes = useSelector((state) => state.clothes.addClothes);
  useEffect(() => {
    dispatch(GetSingleBrand(brandId));
    if (addClothes.isAdded) {
      message.success(addClothes.message);
      dispatch({ type: ADD_CLOTHES_RESET });
    }
  }, [dispatch, addClothes.isAdded]);

  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const handleShowAddProductModal = () => {
    setShowAddProductModal(true);
  };

  const handleCloseAddProductModal = () => {
    setShowAddProductModal(false);
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
            onClick={handleShowAddProductModal}
          >
            Add Product
          </button>
          <AddClothesProductModal
            showAddProductModal={showAddProductModal}
            handleCloseAddProductModal={handleCloseAddProductModal}
          />
          <FiltersButton>Filter Product</FiltersButton>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-start">
        {getSingleBrand &&
        getSingleBrand.brand &&
        getSingleBrand.brand.products &&
        getSingleBrand.brand.products.length > 0 ? (
          getSingleBrand.brand.products.map((item) => (
            <ClotheProductItem key={item._id} item={item} />
          ))
        ) : (
          <EmptyComponent />
        )}
      </div>
    </MainLayout>
  );
};

export default BrandDetailsPage;
