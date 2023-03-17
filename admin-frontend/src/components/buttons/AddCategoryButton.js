import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddCategory } from '../../redux/actions/CategoryActions'
import AddCategoryModal from '../modal/Category/AddCategoryModal'

const AddCategoryButton = () => {

    const [showAddCategoryModal, setShowAddCategoryModal] = useState(false)

    const handleShowAddCategoryModal = () => {
        setShowAddCategoryModal(true)
    }

    const handleCloseAddCategoryModal = () => {
        setShowAddCategoryModal(false)
    }

  return (
   <Fragment>
     <div className="row my-3">
        <div className="d-flex justify-content-end">
    <button className='btn btn-outline-primary rounded-3 ' onClick={handleShowAddCategoryModal} >Add Category</button>
    </div>
    </div>

    <AddCategoryModal 
        showAddCategoryModal={showAddCategoryModal}
        handleCloseAddCategoryModal={handleCloseAddCategoryModal}
    />
   </Fragment>
  )
}

export default AddCategoryButton