import React, { Fragment, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { AllFormCategory, GetFormCategory } from "../redux/actions/FormCategoryActions";
import { AllFormByCategoryId } from "../redux/actions/FormActions";
import { useNavigate } from "react-router-dom";

const FormCategoryPage = () => {
  const getAllFormCategory = useSelector((state) => state.formCategory.getAllFormCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllFormCategory());
  }, [dispatch]);
  const navigate = useNavigate();

  return (
    <Fragment>
      <MainLayout>
        {getAllFormCategory.results.map((category) =>
          category.parent === null ? (
            <h5 className="my-4">{category.name}</h5>
          ) : (
            <button
              onClick={() =>  {
               
                navigate(category._id)
              }}
              className="btn btn-outline-primary mx-2 my-2"
              key={category._id}
            >
              {category.name}
            </button>
          )
        )}
      </MainLayout>
    </Fragment>
  );
};

export default FormCategoryPage;
