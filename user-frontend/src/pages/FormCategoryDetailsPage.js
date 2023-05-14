import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import ClothingNeedForm from "../components/form/ClothingNeedForm";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { SEND_CLOTHING_FORM_RESET, SEND_MEAL_FORM_RESET } from "../redux/constants/FormConstants";
import { Form, message } from "antd";
import ClothingNeedFormSegment from "../components/segment/ClothingNeedFormSegment";
import MealNeedFormSegment from "../components/segment/MealNeedFormSegment";
import SuccessResult from "../components/result/SuccessResult";
import ShelterNeedFormSegment from "../components/segment/ShelterNeedFormSegment";

const FormCategoryDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();



  return (
    <MainLayout>
      <InfoBreadcrumb
        items={[
          {
            title: "Home",
          },

          {
            title: (
              <>
                <a onClick={(e) => e.preventDefault()}>
                  {id === "641c85c1839a1f4fb7df11de" && (
                    <p>Ben / tanıdığım enkazda</p>
                  )}
                  {id === "641c85e4839a1f4fb7df11e2" && (
                    <p>Gıdaya ihtiyacım var</p>
                  )}
                  {id === "641c85f9839a1f4fb7df11e6" && (
                    <p>Isınmaya ihtiyacım var</p>
                  )}
                  {id === "64320327e809f0b2e969c8ef" && (
                    <p>Giyime İhtiyacım var</p>
                  )}
                  {id === "6432032ee809f0b2e969c8f1" && (
                    <p>Barınmaya eihtiyacım var</p>
                  )}
                </a>
              </>
            ),
          },
        ]}
      />

      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-light"
          onClick={() => navigate(`/form-kategoriler`, { replace: true })}
        >
          <i class="fa-solid fa-angle-left"></i> Geri
        </button>
        <div>
          {id === "641c85c1839a1f4fb7df11de" && (
            <h3>Ben / tanıdığım enkazda Formu</h3>
          )}
          {id === "641c85e4839a1f4fb7df11e2" && <h3>Gıda ihtiyaç Formu</h3>}
          {id === "641c85f9839a1f4fb7df11e6" && <h3>Isınma ihtiyaç Formu</h3>}
          {id === "64320327e809f0b2e969c8ef" && <h3>Giyim İhtiyaç Formu</h3>}
          {id === "6432032ee809f0b2e969c8f1" && <h3>Barınma İhtiyaç Formu</h3>}
        </div>
        <div></div>
      </div>
      {id === "641c85c1839a1f4fb7df11de" && (
            <h3>Ben / tanıdığım enkazda Formu</h3>
          )}
      {id === "641c85e4839a1f4fb7df11e2" &&  <MealNeedFormSegment />} 
      {id === "641c85f9839a1f4fb7df11e6" && <h2>Isınmaya ihtiyacım var</h2>}
      {id === "64320327e809f0b2e969c8ef" &&   <ClothingNeedFormSegment   />}
      {id === "6432032ee809f0b2e969c8f1" && <ShelterNeedFormSegment />}
    </MainLayout>
  );
};

export default FormCategoryDetailsPage;
