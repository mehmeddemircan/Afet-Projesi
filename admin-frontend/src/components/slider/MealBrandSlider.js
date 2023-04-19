import React, { useEffect } from 'react'
import BrandSlider from './BrandSlider'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllMealBrand } from '../../redux/actions/BrandActions'
import BrandSliderCard from './BrandSliderCard'

const MealBrandSlider = () => {

    const getAllMealBrand = useSelector((state) => state.brand.getAllMealBrand)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllMealBrand())
    }, [dispatch])

  return (
    <BrandSlider title="Gıda Markalarımız">
            {getAllMealBrand.mealBrands.map((brand) => (
                <BrandSliderCard key={brand._id} brand={brand} />
            ))}
    </BrandSlider>
  )
}

export default MealBrandSlider