import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import AddAreaButton from "../components/buttons/AddAreaButton";
import AreaList from "../components/list/AreaList";
import { useDispatch, useSelector } from "react-redux";
import { AllArea } from "../redux/actions/AreaActions";
import {
  ADD_AREA_RESET,
  DELETE_AREA_RESET,
} from "../redux/constants/AreaConstants";
import { toast } from "react-toastify";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import { Badge } from "antd";
import { AllProduct } from "../redux/actions/ProductActions";

const AllAreaPage = () => {


  const getAllArea = useSelector((state) => state.area.getAllArea);



  return (
    <Fragment>
      <MainLayout>
        <InfoBreadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: (
                <a href="/alanlar" onClick={(e) => e.preventDefault()}>
                  Areas
                </a>
              ),
            },
            {
              title: (
                <>
                  <Badge
                    className="mx-2 "
                    color="#faad14"
                    count={getAllArea.areas.length}
                  >
                    <a className="me-2">Length</a>
                  </Badge>
                </>
              ),
            },
          ]}
        />
      
        <AddAreaButton />
        
     
        <AreaList />
      </MainLayout>
    </Fragment>
  );
};

export default AllAreaPage;
