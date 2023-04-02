import React, { useEffect } from 'react'
import MainLayout from '../components/layout/MainLayout'
import AddSubCategoryForm from '../components/form/AddSubCategoryForm'
import SubCategoryList from '../components/list/SubCategoryList'
import { useDispatch, useSelector } from 'react-redux'
import { AllSubCategory } from '../redux/actions/SubCategoryActions'
import { ADD_SUBCATEGORY_RESET, DELETE_SUBCATEGORY_RESET, UPDATE_SUBCATEGORY_RESET } from '../redux/constants/SubCategoryConstants'
import { toast } from 'react-toastify'

const SubCategoriesPage = () => {


    const addSubCategory  = useSelector((state) => state.subcategory.addSubCategory)
    const deleteUpdateSubCategory  = useSelector((state) => state.subcategory.deleteUpdateSubCategory)
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(AllSubCategory())
        if (addSubCategory.success) {
            dispatch({type : ADD_SUBCATEGORY_RESET})
        }
        if (deleteUpdateSubCategory.deleted) {
            toast(deleteUpdateSubCategory.message)
            dispatch({type : DELETE_SUBCATEGORY_RESET})
        }
        if (deleteUpdateSubCategory.updateSuccess) {
            toast("Succesfully updated subcategory")
            dispatch({type : UPDATE_SUBCATEGORY_RESET})
        }
    }, [dispatch,addSubCategory.success,deleteUpdateSubCategory.deleted,deleteUpdateSubCategory.updateSuccess])


  return (
    <MainLayout>
        <h2 className='text-center'>SUB Page</h2>

        <AddSubCategoryForm />
        <hr />
        <SubCategoryList />
    </MainLayout>
  )
}

export default SubCategoriesPage