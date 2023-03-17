import React, { Fragment, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import AddAreaButton from "../components/buttons/AddAreaButton";
import AreaList from "../components/list/AreaList";
import { useDispatch, useSelector } from "react-redux";
import { AllArea } from "../redux/actions/AreaActions";
import { ADD_AREA_RESET, DELETE_AREA_RESET } from "../redux/constants/AreaConstants";
import { toast } from "react-toastify";

const AllAreaPage = () => {
  
  const dispatch = useDispatch()
  const addArea = useSelector((state) => state.addArea)
  const deleteUpdateArea = useSelector((state) => state.deleteUpdateArea)
  useEffect(() => {
    dispatch(AllArea())

    if (addArea.success) {
      dispatch({type : ADD_AREA_RESET})
    }
    if (deleteUpdateArea.isDeleted) {
      toast(deleteUpdateArea.message)
      dispatch({type : DELETE_AREA_RESET})
    }
  }, [dispatch,addArea.success,deleteUpdateArea.isDeleted])

  return (
    <Fragment>
      <MainLayout>
        <AddAreaButton />
        <AreaList />
      </MainLayout>
    </Fragment>
  );
};

export default AllAreaPage;
