import React, { useEffect, useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import AddProductButton from '../components/buttons/AddProductButton'
import AddProductModal from '../components/modal/Product/AddProductModal'
import { useDispatch, useSelector } from 'react-redux'
import { AllCategory, GetCategories } from '../redux/actions/CategoryActions'
import { AllProduct, GetSingleProdcut } from '../redux/actions/ProductActions'
import { ADD_PRODUCT_RESET, DELETE_PRODUCT_RESET } from '../redux/constants/ProductConstants'

import ProductList from '../components/list/ProductList'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductsPage = () => {

  const addProduct = useSelector((state) => state.addProduct)
  const getAllProduct = useSelector((state) => state.getAllProduct)
  const deleteUpdateProduct = useSelector((state) => state.deleteUpdateProduct)

  const [showAddProductModal, setShowAddProductModal] = useState(false)

  const handleShowAddProductModal = ()  => {
    setShowAddProductModal(true)
  }

  const handleCloseAddProductModal = () => {
    setShowAddProductModal(false)
  }

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(AllProduct())
      if (addProduct.success) {
        dispatch({type : ADD_PRODUCT_RESET})
      }
      if (deleteUpdateProduct.deleted) {
        toast(deleteUpdateProduct.message)
        dispatch({type :DELETE_PRODUCT_RESET})
      }
  }, [dispatch,addProduct.success,deleteUpdateProduct.deleted])

  useEffect(() => {
    dispatch(GetCategories())
  }, [dispatch])

  const {id} = useParams()

  useEffect(() => {
    dispatch(GetSingleProdcut(id))
  }, [dispatch])

  return (
   <MainLayout>
    <h2 className='text-center my-4'>Products Page</h2>
    <AddProductButton handleShowAddProductModal={handleShowAddProductModal} />
    <AddProductModal  showAddProductModal={showAddProductModal} handleCloseAddProductModal={handleCloseAddProductModal}/>
  
      <ProductList />
   </MainLayout>
  )
}

export default ProductsPage