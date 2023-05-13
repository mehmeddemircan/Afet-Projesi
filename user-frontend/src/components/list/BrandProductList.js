import React from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../spinner/LoadingSpinner'
import BrandProductCard from '../card/BrandProductCard'
import EmptyComponent from '../empty/EmptyComponent'


const BrandProductList = () => {

    const  getAllProductsByBrand = useSelector((state) => state.brand.getAllProductsByBrand)
    const getSingleBrand = useSelector((state) => state.brand.getSingleBrand)
    

  return (
    <div className='d-flex flex-row flex-wrap justify-content-start'>
        {
            getSingleBrand.loading  ? <LoadingSpinner /> : getAllProductsByBrand.success ? getAllProductsByBrand.brandProducts.length > 0   ? getAllProductsByBrand.brandProducts.map((item) => (
                <BrandProductCard key={item._id} item={item} />
            )) :  <EmptyComponent /> : null
        }

    </div>
  )
}

export default BrandProductList