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
import {
  AllShelterForm,
  ApproveShelterForm,
  DeleteShelterForm,
} from "../redux/actions/ShelterNeedFormActions";
import {
  DELETE_SHELTER_FORM_RESET,
  UPDATE_SHELTER_FORM_RESET,
} from "../redux/constants/ShelterNeedFormConstants";
import { AllMealForm, ApproveMealForm, DeleteMealForm } from "../redux/actions/MealNeedFormActions";
import { DELETE_MEAL_NEED_FORM_RESET, UPDATE_MEAL_NEED_FORM_RESET } from "../redux/constants/MealNeedFormConstants";
import MetaTitle from "../meta/MetaTitle";

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

  const handleDeleteShelterForm = (id) => {
    dispatch(DeleteShelterForm(id));
  };

  const handleApproveShelterForm = (id) => {
    dispatch(ApproveShelterForm(id));
  };

  const deleteUpdateClothingForm = useSelector(
    (state) => state.clothingNeedForm.deleteUpdateClothingForm
  );

  const approvedClothingForms = getAllClothingForms.clothingForms.filter(
    (form) => form.isApproved === true
  );

  const unApprovedClothingForms = getAllClothingForms.clothingForms.filter(
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

  const getAllShelterForm = useSelector(
    (state) => state.shelterNeedForm.getAllShelterForm
  );
  const deleteUpdateShelterForm = useSelector(
    (state) => state.shelterNeedForm.deleteUpdateShelterForm
  );

  const approvedShelterForms = getAllShelterForm.shelterForms.filter(
    (form) => form.isApproved === true
  );

  const unApprovedShelterForms = getAllShelterForm.shelterForms.filter(
    (form) => form.isApproved === false
  );
  useEffect(() => {
    if (categoryId === "6432032ee809f0b2e969c8f1") {
      dispatch(AllShelterForm());
    }
    if (deleteUpdateShelterForm.isDeleted) {
      message.success(deleteUpdateShelterForm.message);
      dispatch({ type: DELETE_SHELTER_FORM_RESET });
    }
    if (deleteUpdateShelterForm.isUpdated) {
      message.success(deleteUpdateShelterForm.message);
      dispatch({ type: UPDATE_SHELTER_FORM_RESET });
    }
  }, [
    dispatch,
    categoryId,
    deleteUpdateShelterForm.isDeleted,
    deleteUpdateShelterForm.isUpdated,
  ]);

    const deleteUpdateMealForm = useSelector((state) => state.mealNeedForm.deleteUpdateMealForm)
    const getAllMealForm = useSelector((state) => state.mealNeedForm.getAllMealForm)


    const approvedMealForms = getAllMealForm.mealForms.filter(
      (form) => form.isApproved === true
    );
  
    const unApprovedMealForms = getAllMealForm.mealForms.filter(
      (form) => form.isApproved === false
    );

    const handleDeleteMealForm = (id) => {
      dispatch(DeleteMealForm(id));
    };
  
    const handleApproveMealForm = (id) => {
      dispatch(ApproveMealForm(id));
    };
  

  useEffect(() => {
    //isim de verilebilir
    if (categoryId === "641c85e4839a1f4fb7df11e2") {
      dispatch(AllMealForm());
    }
    if (deleteUpdateMealForm.isDeleted) {
      message.success(deleteUpdateMealForm.message);
      dispatch({ type: DELETE_MEAL_NEED_FORM_RESET });
    }
    if (deleteUpdateMealForm.isUpdated) {
      message.success(deleteUpdateMealForm.message);
      dispatch({ type: UPDATE_MEAL_NEED_FORM_RESET });
    }
  }, [
    dispatch,
    categoryId,
    deleteUpdateMealForm.isDeleted,
    deleteUpdateMealForm.isUpdated,
  ]);

  return (
    <MainLayout>
      <MetaTitle title={`${getSingleFormCategory.formCategory.name} Detayları`} name="formKategoriDetayları" content="formKategoriDetayları" />
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
            {
            getAllMealForm.success ? unApprovedMealForms.map((form) => (
              <FormInfoItem 
                isApproved={false}
                isShelterForm={false}
                isClothingForm={false}
                isMealForm={true}
                key={form._id}
                form={form}
                handleDeleteMealForm={handleDeleteMealForm}
                handleApproveMealForm={handleApproveMealForm}
                
                />
            )) : 
            getAllShelterForm.success
              ? unApprovedShelterForms.map((form) => (
                  <FormInfoItem
                    isApproved={false}
                    isShelterForm={true}
                    isClothingForm={false}
                    isMealForm={false}
                    key={form._id}
                    form={form}
                    handleDeleteShelterForm={handleDeleteShelterForm}
                    handleApproveShelterForm={handleApproveShelterForm}
                  />
                ))
              : getAllClothingForms.success
              ? unApprovedClothingForms.map((form) => (
                  <FormInfoItem
                    isApproved={false}
                    isClothingForm={true}
                    isShelterForm={false}
                    isMealForm={false}
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
                    isShelterForm={false}
                    isMealForm={false}
                    key={form._id}
                    form={form}
                    handleDeleteForm={handleDeleteForm}
                    handleApproveForm={handleApproveForm}
                  />
                ))}
          </List>
        </TabPane>
        <TabPane key="2" tab="Approved">
          <List>
            {
              getAllMealForm.success ? approvedMealForms.map((form) => (
                <FormInfoItem 
                  isApproved={true}
                  isShelterForm={false}
                  isClothingForm={false}
                  isMealForm={true}
                  key={form._id}
                  form={form}
                  handleDeleteMealForm={handleDeleteMealForm}
                
                  
                  />
              )) : 
            
            getAllShelterForm.success
              ? approvedShelterForms.map((form) => (
                  <FormInfoItem
                    isApproved={true}
                    isShelterForm={true}
                    isClothingForm={false}
                    isMealForm={false}
                    key={form._id}
                    form={form}
                    handleDeleteShelterForm={handleDeleteShelterForm}
                  />
                ))
              : getAllClothingForms.success
              ? approvedClothingForms.map((form) => (
                  <FormInfoItem
                    isApproved={true}
                    isClothingForm={true}
                    isShelterForm={false}
                    isMealForm={false}
                    key={form._id}
                    form={form}
                    handleDeleteClothingForm={handleDeleteClothingForm}
                  />
                ))
              : approvedForms.map((form) => (
                  <FormInfoItem
                    isApproved={true}
                    isClothingForm={false}
                    isMealForm={false}
                    isShelterForm={false}
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
