import React, { useEffect } from 'react'
import MainLayout from '../components/layout/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { AllFormCategory } from '../redux/actions/FormActions'
import { useNavigate } from 'react-router-dom'
import FormCategoryButton from '../components/button/FormCategoryButton'
import LoadingSpinner from '../components/spinner/LoadingSpinner'

const FormCategoryPage = () => {

    const getAllFormCategory = useSelector((state) => state.form.getAllFormCategory)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AllFormCategory())
    }, [dispatch])

  return (
    <MainLayout>
 {getAllFormCategory.loading ? <LoadingSpinner />  :  getAllFormCategory.results.map((category) =>
          category.parent === null ? (
            <h5 className="my-4">{category.name}</h5>
          ) : (
            <FormCategoryButton key={category._id} category={category} />
          )
        )}
    </MainLayout>
  )
}

export default FormCategoryPage