import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AllApprovedFormByCategoryId,
  AllFormByCategoryId,
  ApproveGetHelpForm,
  DeleteGetHelpForm,
  SearchForms,
} from "../redux/actions/FormActions";
import { Badge, Descriptions, List, Tabs, message } from "antd";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import FiltersButton from "../components/map/FiltersButton";

import FiltersButtonFormContent from "../components/popover/FiltersButtonFormContent";
import FormInfoItem from "../components/listitem/FormInfoItem";
import { GetFormCategory } from "../redux/actions/FormCategoryActions";

import {
  DELETE_FORM_RESET,
  UPDATE_FORM_RESET,
} from "../redux/constants/FormConstants";
import {
  AllClothingForm,
  ApproveClothingForm,
  DeleteClothingForm,
} from "../redux/actions/ClothingNeedFormAction";
import { deleteUpdateClothingFormReducer } from "../redux/reducers/ClothingNeedFormReducer";
import {
  DELETE_CLOTHING_FORM_RESET,
  UPDATE_CLOTHING_FORM_RESET,
} from "../redux/constants/ClothingNeedFormConstants";

const { TabPane } = Tabs;
const FormListPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const getFormsByCategoryId = useSelector(
    (state) => state.form.getFormsByCategoryId
  );
  const deleteUpdateGetHelpForm = useSelector(
    (state) => state.form.deleteUpdateGetHelpForm
  );
  const getAllClothingForms = useSelector(
    (state) => state.clothingNeedForm.getAllClothingForms
  );
  const dispatch = useDispatch();

  const getSingleFormCategory = useSelector(
    (state) => state.formCategory.getSingleFormCategory
  );
  // Filter the approved forms and put them into an array
  const approvedForms = getFormsByCategoryId.forms.filter(
    (form) => form.isApproved === true
  );

  const unApprovedForms = getFormsByCategoryId.forms.filter(
    (form) => form.isApproved === false
  );
  useEffect(() => {
    dispatch(AllFormByCategoryId(categoryId));

    if (deleteUpdateGetHelpForm.isDeleted) {
      message.success(deleteUpdateGetHelpForm.message);
      dispatch({ type: DELETE_FORM_RESET });
    }
    if (deleteUpdateGetHelpForm.isApproved) {
      message.success(deleteUpdateGetHelpForm.message);
      dispatch({ type: UPDATE_FORM_RESET });
    }
  }, [
    dispatch,
    deleteUpdateGetHelpForm.isDeleted,
    deleteUpdateGetHelpForm.isApproved,
  ]);

  useEffect(() => {
    dispatch(GetFormCategory(categoryId));
  }, [dispatch]);

  const [name, setName] = useState("");
  const [urgencies, setUrgencies] = useState(["Kritik", "Orta", "Normal"]);
  const [urgency, setUrgency] = useState("");
  const handleSelect = (e) => {
    setUrgency(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(SearchForms(categoryId, name, urgency));
  };

  // delete form dispatch
  const handleDeleteForm = (id) => {
    dispatch(DeleteGetHelpForm(id));
  };
  // approve form
  const handleApproveForm = (id) => {
    dispatch(ApproveGetHelpForm(id));
  };

  const handleDeleteClothingForm = (id) => {
    dispatch(DeleteClothingForm(id));
  };

  const handleApproveClothingForm = (id) => {
    dispatch(ApproveClothingForm(id));
  };

  const deleteUpdateClothingForm = useSelector(
    (state) => state.clothingNeedForm.deleteUpdateClothingForm
  );

  const approvedClothingForms = getAllClothingForms.clothingForms.filter(
    (form) => form.isApproved === true
  );

  const upApprovedClothingForms = getAllClothingForms.clothingForms.filter(
    (form) => form.isApproved === false
  );

  useEffect(() => {
    if (categoryId === "64320327e809f0b2e969c8ef") {
      dispatch(AllClothingForm());
    }
    if (deleteUpdateClothingForm.isDeleted) {
      message.success(deleteUpdateClothingForm.message);
      dispatch({ type: DELETE_CLOTHING_FORM_RESET });
    }
    if (deleteUpdateClothingForm.isUpdated) {
      message.success(deleteUpdateClothingForm.message);
      dispatch({ type: UPDATE_CLOTHING_FORM_RESET });
    }
  }, [
    dispatch,
    categoryId,
    deleteUpdateClothingForm.isDeleted,
    deleteUpdateClothingForm.isUpdated,
  ]);

  return (
    <MainLayout>
      <div className="row">
        <InfoBreadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: (
                <a href="/yardim-formları" onClick={(e) => e.preventDefault()}>
                  Yardım Formları
                </a>
              ),
            },
            {
              title: (
                <>
                  <a onClick={(e) => e.preventDefault()}>
                    {getSingleFormCategory.formCategory.name}
                  </a>
                </>
              ),
            },
          ]}
        />
      </div>
      <h4>{getSingleFormCategory.formCategory.name}</h4>
      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-light"
          onClick={() => navigate("/yardım-formları", { replace: true })}
        >
          <i class="fa-solid fa-angle-left"></i> Geri
        </button>
        <FiltersButton content={<FiltersButtonFormContent />}>
          Filters Form
        </FiltersButton>
      </div>
      {/* search input */}

      <form className="my-4">
        <div class="d-flex justify-content-between flex-row align-items-center">
          <div className="col-md-3">
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <select
              id="inputState"
              class="form-control"
              value={urgency}
              onChange={handleSelect}
            >
              <option selected value={""}>
                Aciliyet
              </option>
              {urgencies.map((urgency, i) => (
                <option key={i} value={urgency}>
                  {urgency}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <input
              type="address"
              class="form-control"
              id="inputEmail4"
              placeholder="Address"
            />
          </div>

          <button className="btn btn-outline-secondary " onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
      <Tabs>
        <TabPane key="1" tab="Un Approved">
          <List>
            {getAllClothingForms.success
              ? upApprovedClothingForms.map((form) => (
                  <FormInfoItem
                    isApproved={false}
                    isClothingForm={true}
                    key={form._id}
                    form={form}
                    handleDeleteClothingForm={handleDeleteClothingForm}
                    handleApproveClothingForm={handleApproveClothingForm}
                  />
                ))
              : unApprovedForms.map((form) => (
                  <FormInfoItem
                    isApproved={false}
                    isClothingForm={false}
                    key={form._id}
                    form={form}
                    handleDeleteForm={handleDeleteForm}
                    handleApproveForm={handleApproveForm}
                  />
                ))}
            {}
          </List>
        </TabPane>
        <TabPane key="2" tab="Approved">
          <List>
            {getAllClothingForms.success
              ? approvedClothingForms.map((form) => (
                  <FormInfoItem
                    isApproved={true}
                    isClothingForm={true}
                    key={form._id}
                    form={form}
                    handleDeleteClothingForm={handleDeleteClothingForm}
                
                  />
                ))
              : approvedForms.map((form) => (
                  <FormInfoItem
                    isApproved={true}
                    isClothingForm={false}
                    key={form._id}
                    form={form}
                    handleDeleteForm={handleDeleteForm}
                  />
                ))}
          </List>
        </TabPane>
      </Tabs>
    </MainLayout>
  );
};

export default FormListPage;
