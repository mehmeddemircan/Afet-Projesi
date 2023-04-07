import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllBrand } from '../../redux/actions/BrandActions';
import { ADD_BRAND_RESET, DELETE_BRAND_RESET } from '../../redux/constants/BrandConstants';
import { message } from 'antd';
import BrandItem from '../listitem/BrandItem';

const BrandList = () => {

    const getAllBrand = useSelector((state) => state.brand.getAllBrand);
    const addBrand = useSelector((state) => state.brand.addBrand);
    const deleteUpdateBrand = useSelector((state) => state.brand.deleteUpdateBrand)
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(AllBrand());
      if (addBrand.isAdded) {
        message.success(addBrand.message);
        dispatch({ type: ADD_BRAND_RESET });
      }
      if (deleteUpdateBrand.isDeleted) {
          message.success(deleteUpdateBrand.message)
          dispatch({type : DELETE_BRAND_RESET})
      }
      
    }, [dispatch, addBrand.isAdded,deleteUpdateBrand.isDeleted]);

  return (
    <Fragment>
        <div className="d-flex flex-row flex-wrap justify-content-start">
        {getAllBrand.brands.map((brand) => (
            <BrandItem key={brand._id} brand={brand} />
        ))}
      </div>
    </Fragment>
  )
}

export default BrandList