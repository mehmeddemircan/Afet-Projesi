import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { DeleteClothingForm, GetAllClothingForm } from '../redux/actions/FormActions'
import FormInfoCard from '../components/card/FormInfoCard'
import {message} from 'antd'
import { DELETE_CLOTHING_FORM_RESET } from '../redux/constants/FormConstants'
import LoadingSpinner from '../components/spinner/LoadingSpinner'
import EmptyComponent from '../components/empty/EmptyComponent'
const ClothingFormsPage = () => {

    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const getAllClothingForm = useSelector((state) => state.form.getAllClothingForm)
    const deleteUpdateForm = useSelector((state) => state.form.deleteUpdateForm)
    
    //popover eklenecek 
    useEffect(() => {
     
        if (auth.authenticate) {
            dispatch(GetAllClothingForm(auth.user._id))
        }
   
        if (deleteUpdateForm.isClothingFormDeleted) {
            message.success(deleteUpdateForm.message)
            dispatch({type : DELETE_CLOTHING_FORM_RESET})   
        }
    }, [dispatch,auth,auth.authenticate,deleteUpdateForm.isClothingFormDeleted])


  return (
    <MainLayout>
        <h4>Giyim Formlarım</h4>
   
        {getAllClothingForm.loading ? <LoadingSpinner /> : getAllClothingForm.clothingForms.length === 0 ? <EmptyComponent /> :  getAllClothingForm.clothingForms.map((form) => (
            <FormInfoCard isClothingForm={true} key={form._id} form={form}/>
        ))}
    </MainLayout>
  )
}

export default ClothingFormsPage