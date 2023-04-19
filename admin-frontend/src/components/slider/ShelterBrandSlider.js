import React from 'react'
import BrandSlider from './BrandSlider'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetAllShelterBrand } from '../../redux/actions/BrandActions'
import BrandSliderCard from './BrandSliderCard'

const ShelterBrandSlider = () => {

    const getAllShelterBrand = useSelector((state) => state.brand.getAllShelterBrand)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllShelterBrand())
    }, [dispatch])


  return (
    <BrandSlider title="Ev-Hotel Markalarımız">

        {getAllShelterBrand.shelterBrands.map((brand) => (
            <BrandSliderCard key={brand._id} brand={brand} />
        ))}
    
    </BrandSlider>
  )
}

export default ShelterBrandSlider