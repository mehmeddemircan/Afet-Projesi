import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AllClothesByBrand, AllMealByBrand, AllShelterByBrand, GetSingleBrand } from '../redux/actions/BrandActions'
import MainLayout from '../components/layout/MainLayout'
import BrandProductList from '../components/list/BrandProductList'

const BrandDetailsPage = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

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
            <BrandProductList />
        </MainLayout>
  )
}

export default BrandDetailsPage