import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import EmptyComponent from "../components/empty/EmptyComponent";
import FormInfoCard from "../components/card/FormInfoCard";
import { useEffect } from "react";
import { GetAllMealForm } from "../redux/actions/FormActions";
import { message } from "antd";
import { DELETE_MEAL_FORM_RESET } from "../redux/constants/FormConstants";
const MealFormsPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const getAllMealForm = useSelector((state) => state.form.getAllMealForm);
  const deleteUpdateForm = useSelector((state) => state.form.deleteUpdateForm);
  useEffect(() => {
    if (auth.authenticate) {
      dispatch(GetAllMealForm(auth.user._id));
    }

    if (deleteUpdateForm.isMealFormDeleted) {
      message.success(deleteUpdateForm.message);
      dispatch({ type: DELETE_MEAL_FORM_RESET });
    }
  }, [dispatch, auth, auth.authenticate, deleteUpdateForm.isMealFormDeleted]);
  return (
    <MainLayout>
      <h4>Gıda Formlarım</h4>
      {getAllMealForm.loading ? (
        <LoadingSpinner />
      ) : getAllMealForm.mealForms.length === 0 ? (
        <EmptyComponent />
      ) : (
        getAllMealForm.mealForms.map((form) => (
          <FormInfoCard isMealForm={true} key={form._id} form={form} />
        ))
      )}
    </MainLayout>
  );
};

export default MealFormsPage;
