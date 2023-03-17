import { Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateCategory } from '../../../redux/actions/CategoryActions'

const EditCategoryModal = ({category,showEditCategoryModal,handleCloseEditCategoryModal}) => {

    const deleteUpdateCategory =useSelector((state) => state.deleteUpdateCategory)
    const [name, setName] = useState(category.name)
    const dispatch = useDispatch()
    const handleUpdateCategory = () => {
        dispatch(UpdateCategory(category._id,{name}))
        if (!deleteUpdateCategory.updateSuccess) {
            handleCloseEditCategoryModal()
        }
    }

  return (
        <Fragment>
            <Modal
        centered
        open={showEditCategoryModal}
        onOk={handleUpdateCategory}
        onCancel={handleCloseEditCategoryModal}
      >
        <form>
          <div class="form-group">
            <h4 class="text-center">Update Category </h4>
            <label for="recipient-name" class="col-form-label">
              Category Name
            </label>
            <input
              type="text"
              class="form-control "
              id="person-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
      </Modal>
        </Fragment>
  )
}

export default EditCategoryModal