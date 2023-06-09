import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import AddBrandButton from "../components/buttons/AddBrandButton";
import { useDispatch, useSelector } from "react-redux";
import { AllBrand } from "../redux/actions/BrandActions";
import { Card, Tooltip, message } from "antd";
import { ADD_BRAND_RESET } from "../redux/constants/BrandConstants";
import BrandList from "../components/list/BrandList";
import MetaTitle from "../meta/MetaTitle";

const AllBrandPage = () => {


  return (
    <MainLayout>
    <MetaTitle title="Sponsor Markalarımız" name="sponsorMarkalarımız" content="sponsorMarkalarımız" />
      <AddBrandButton />
      <BrandList />
    </MainLayout>
  );
};

export default AllBrandPage;
