import { Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProduct } from '../../../redux/actions/ProductActions'

const AddProductModal = ({showAddProductModal,handleCloseAddProductModal}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")


    const getCategories = useSelector((state) => state.category.getCategories)
    const addProduct = useSelector((state) => state.product.addProduct)
    const dispatch = useDispatch()
    const handleAddProduct = () => {
        dispatch(AddProduct({title,description,category}))
    
        handleCloseAddProductModal()
    }
    useEffect(() => {
        if (addProduct.success) {
            setTitle("")
            setDescription("")
            setCategory("")
        }
    }, [addProduct.success])
  return (
    <Modal
 
    centered
    open={showAddProductModal}
     onOk={handleAddProduct}
    onCancel={handleCloseAddProductModal}
  >
    <form>
      <div class="form-group">
        <h4 class="text-center">New Product </h4>
        <div>
        <label for="recipient-name" class="col-form-label">
          Product Title{" "}
        </label>
        <input
          type="text"
          class="form-control "
          id="product-name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <div>
        <label for="recipient-name" class="col-form-label">
        Description{" "}
        </label>
        <input
          type="text"
          class="form-control "
          id="product-name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </div>
        <div>
        <label for="recipient-name" class="col-form-label">
          Category{" "}{category}
        </label>
        <select class="form-select" aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
  <option selected>Select a category </option>
            {getCategories.categories.map((category) => (
                  <option value={category._id} >{category.name}</option>
                
            ))}
</select>

        </div>
      </div>
    </form>
  </Modal>
  )
}

export default AddProductModal