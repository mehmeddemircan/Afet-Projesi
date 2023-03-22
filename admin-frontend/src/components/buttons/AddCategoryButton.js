import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddCategory } from '../../redux/actions/CategoryActions'
import AddCategoryModal from '../modal/Category/AddCategoryModal'
import AddButton from './AddButton'

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
   <AddButton name="Add Category" onClick={handleShowAddCategoryModal} />
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