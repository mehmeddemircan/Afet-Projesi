import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import AddAreaButton from "../components/buttons/AddAreaButton";
import AreaList from "../components/list/AreaList";
import {  useSelector } from "react-redux";

import { toast } from "react-toastify";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import { Badge } from "antd";


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
