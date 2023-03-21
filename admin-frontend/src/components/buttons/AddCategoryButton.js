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
   
   <AddButton name="Add Category" onClick={handleShowAddCategoryModal} />

    <AddCategoryModal 
        showAddCategoryModal={showAddCategoryModal}
        handleCloseAddCategoryModal={handleCloseAddCategoryModal}
    />
   </Fragment>
  )
}

export default AddCategoryButton