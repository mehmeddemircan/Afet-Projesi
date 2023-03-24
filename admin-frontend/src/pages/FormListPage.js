import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AllFormByCategoryId, SearchForms } from "../redux/actions/FormActions";
import { Badge, Descriptions, List , message } from "antd";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import FiltersButton from "../components/map/FiltersButton";

import FiltersButtonFormContent from "../components/popover/FiltersButtonFormContent";
import FormInfoItem from "../components/listitem/FormInfoItem";
import { GetFormCategory } from "../redux/actions/FormCategoryActions";
import { toast } from "react-toastify";
import { DELETE_FORM_RESET } from "../redux/constants/FormConstants";

const FormListPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const getFormsByCategoryId = useSelector(
    (state) => state.getFormsByCategoryId
  );
  const deleteUpdateGetHelpForm = useSelector((state) => state.deleteUpdateGetHelpForm)
  const dispatch = useDispatch();

  const getSingleFormCategory = useSelector(
    (state) => state.getSingleFormCategory
  );

  useEffect(() => {
    dispatch(AllFormByCategoryId(categoryId));

    if (deleteUpdateGetHelpForm.isDeleted) {
      message.success(deleteUpdateGetHelpForm.message)
      dispatch({type : DELETE_FORM_RESET})
    }
  }, [dispatch,deleteUpdateGetHelpForm.isDeleted]);
  useEffect(() => {
    dispatch(GetFormCategory(categoryId));
  }, [dispatch])

  const [name, setName] = useState("")
  const [urgencies, setUrgencies] = useState(['Kritik','Orta','Normal'])
  const [urgency, setUrgency] = useState("")
  const handleSelect  = (e) => {
    setUrgency(e.target.value)

  }

  const handleSearch  = (e) => {
    e.preventDefault()
    dispatch(SearchForms(categoryId,name,urgency))
  }

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
        <FiltersButton content={<FiltersButtonFormContent />} />
      </div>
      {/* search input */}
          {urgency}
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
            <select id="inputState" class="form-control" value={urgency} onChange={handleSelect} >
              <option selected value={""}>Aciliyet</option>
            {urgencies.map((urgency,i) => (
              <option key={i} value={urgency} >{urgency}</option>
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

          <button className="btn btn-outline-secondary " onClick={handleSearch}> Search</button>
        </div>
      </form>

      <List>
        {getFormsByCategoryId.forms.map((form) => (
          <FormInfoItem key={form._id} form={form} />
        ))}
      </List>
    </MainLayout>
  );
};

export default FormListPage;
