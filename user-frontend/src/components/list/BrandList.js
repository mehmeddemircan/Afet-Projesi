import React from "react";
import { useSelector } from "react-redux";
import BrandCard from "../card/BrandCard";

const BrandList = () => {
  const getBrandsByName = useSelector((state) => state.brand.getBrandsByName);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-start ">
      {getBrandsByName.brands.map((brand) => (
        <BrandCard key={brand._id} brand={brand} />
      ))}
    </div>
  );
};

export default BrandList;
