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

const AllAreaPage = () => {
  const dispatch = useDispatch();
  const addArea = useSelector((state) => state.addArea);
  const deleteUpdateArea = useSelector((state) => state.deleteUpdateArea);
  const getAllArea = useSelector((state) => state.getAllArea);
  const [priorities, setPriorities] = useState([])
  useEffect(() => {
    dispatch(AllArea(priorities));

    if (addArea.success) {
      dispatch({ type: ADD_AREA_RESET });
    }
    if (deleteUpdateArea.isDeleted) {
      toast(deleteUpdateArea.message);
      dispatch({ type: DELETE_AREA_RESET });
    }
  }, [dispatch, addArea.success, deleteUpdateArea.isDeleted]);

  return (
    <Fragment>
      <MainLayout>
        <InfoBreadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: <a href="/alanlar" onClick={(e) => e.preventDefault()}>Areas</a>,
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
