import { Card, Carousel } from "antd";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetAllClothesBrand } from "../../redux/actions/BrandActions";
import BrandSlider from "./BrandSlider";
import BrandSliderCard from "./BrandSliderCard";


const ClothesBrandSlider = () => {
  const getAllClothesBrand = useSelector(
    (state) => state.brand.getAllClothesBrand
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllClothesBrand());
  }, [dispatch]);

  return (
    <BrandSlider title="Giyim Markalarımız" length={getAllClothesBrand.clothesBrands.length}>
      {getAllClothesBrand.clothesBrands.map((brand) => (
        <BrandSliderCard key={brand._id} brand={brand} />
      ))}
    </BrandSlider>
  );
};

export default ClothesBrandSlider;
