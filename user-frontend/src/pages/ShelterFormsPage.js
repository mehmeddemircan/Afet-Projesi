import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllShelterForm } from "../redux/actions/FormActions";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import EmptyComponent from "../components/empty/EmptyComponent";
import FormInfoCard from "../components/card/FormInfoCard";
import { message } from "antd";
import { DELETE_SHELTER_FORM_RESET } from "../redux/constants/FormConstants";
const ShelterFormsPage = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const getAllShelterForm = useSelector(
    (state) => state.form.getAllShelterForm
  );
  const deleteUpdateForm = useSelector((state) => state.form.deleteUpdateForm);
  useEffect(() => {
    if (auth.authenticate) {
      dispatch(GetAllShelterForm(auth.user._id));
    }
    if (deleteUpdateForm.isShelterFormDeleted) {
      message.success(deleteUpdateForm.message);
      dispatch({ type: DELETE_SHELTER_FORM_RESET });
    }
  }, [
    dispatch,
    auth,
    auth.authenticate,
    deleteUpdateForm.isShelterFormDeleted,
  ]);

  return (
    <MainLayout>
      <h4>Barınma Formlarım</h4>
      {getAllShelterForm.loading ? (
        <LoadingSpinner />
      ) : getAllShelterForm.shelterForms.length === 0 ? (
        <EmptyComponent />
      ) : (
        getAllShelterForm.shelterForms.map((form) => (
          <FormInfoCard isShelterForm={true} key={form._id} form={form} />
        ))
      )}
    </MainLayout>
  );
};

export default ShelterFormsPage;
