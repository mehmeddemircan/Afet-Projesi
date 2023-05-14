import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AllClothesByBrand, AllMealByBrand, AllShelterByBrand, GetSingleBrand } from '../redux/actions/BrandActions'
import MainLayout from '../components/layout/MainLayout'
import BrandProductList from '../components/list/BrandProductList'
import InfoBreadcrumb from '../components/breadcrumb/InfoBreadCrumb'

const BrandDetailsPage = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getSingleBrand = useSelector((state) => state.brand.getSingleBrand)

    useEffect(() => {
        dispatch(GetSingleBrand(id))  
    }, [dispatch,id])

    useEffect(() => {
        if (getSingleBrand.brand.category === "Ev-Hotel") {
            dispatch(AllShelterByBrand(id))
        }
        if (getSingleBrand.brand.category === "Gıda") {
            dispatch(AllMealByBrand(id))
        }
        if (getSingleBrand.brand.category === "Giyim") {
            dispatch(AllClothesByBrand(id))
        }
    }, [dispatch,getSingleBrand.brand.category, id])

  return (
        <MainLayout>
             
        <InfoBreadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: (
                <a href={`/kategoriler/${getSingleBrand.brand.category}`}>
                  {getSingleBrand.brand.category} Markaları
                </a>
              ),
            },
            {
              title: (
                <>
                  <a onClick={(e) => e.preventDefault()}>
                    {getSingleBrand.brand.name}
                  </a>
                </>
              ),
            },
          ]}
        />

      <h4>{getSingleBrand.brand.name}</h4>
      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-light"
          onClick={() => navigate(`/kategoriler/${getSingleBrand.brand.category}`, { replace: true })}
        >
          <i class="fa-solid fa-angle-left"></i> Geri
        </button>
        </div>
       
            <BrandProductList />
        </MainLayout>
  )
}

export default BrandDetailsPage