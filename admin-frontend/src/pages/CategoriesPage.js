import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import AddCategoryButton from "../components/buttons/AddCategoryButton";
import CategoryList from "../components/list/CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { AllCategory } from "../redux/actions/CategoryActions";
import {
  ADD_CATEGORY_RESET,
  ADD_SUB_TO_CATEGORY_RESET,
  DELETE_CATEGORY_RESET,
  UPDATE_CATEGORY_RESET,
} from "../redux/constants/CategoryConstants";
import { toast } from "react-toastify";
import CategoryPagination from "../components/pagination/CategoryPagination";
import { Pagination } from "antd";
import { AllSubCategory } from "../redux/actions/SubCategoryActions";

const CategoriesPage = () => {
  const addCategory = useSelector((state) => state.addCategory);
  const getAllCategory = useSelector((state) => state.getAllCategory);
  const [limit, setLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const deleteUpdateCategory = useSelector(
    (state) => state.deleteUpdateCategory
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllCategory(currentPage, limit));
    if (addCategory.success) {
      toast(addCategory.message);
      dispatch({ type: ADD_CATEGORY_RESET });
    }
    if (deleteUpdateCategory.deleted) {
      dispatch({ type: DELETE_CATEGORY_RESET });
      if (getAllCategory.totalLength % 4 != 0) {
        // setCurrentPage(currentPage--)
        setCurrentPage((prevCount) => prevCount - 1);
      }
    }
    if (deleteUpdateCategory.updateSuccess) {
        dispatch({type : UPDATE_CATEGORY_RESET})
    }
    if (deleteUpdateCategory.addedSubToCategory) {
        dispatch({type : ADD_SUB_TO_CATEGORY_RESET})
    }
  }, [
    dispatch,
    addCategory.success,
    deleteUpdateCategory.deleted,
    currentPage,
    getAllCategory.totalLength,
    setCurrentPage,
    deleteUpdateCategory.updateSuccess,
    deleteUpdateCategory.addedSubToCategory
  ]);
  
    useEffect(() => {
        dispatch(AllSubCategory())
    }, [dispatch])

  return (
    <MainLayout>
      <AddCategoryButton />
      <CategoryList />
      <div className="row">
        <div className="d-flex justify-content-end">
          <Pagination
            onChange={(page) => setCurrentPage(page)}
            current={currentPage}
            defaultCurrent={1}
            pageSize={limit}
            total={getAllCategory.totalLength}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoriesPage;
