import React from 'react'
import {Modal} from 'antd'
import MealNeedForm from '../form/MealNeedForm'
const EditMealFormModal = ({form,showEditMealFormModal,handleCloseEditMealFormModal}) => {
  return (
    <Modal
    centered
    title="Basic Modal"
    open={showEditMealFormModal}
    onOk={handleCloseEditMealFormModal}
    onCancel={handleCloseEditMealFormModal}
    footer={null}
  >
    <MealNeedForm isEditForm={true} formItem={form} />
  </Modal>
  )
}

export default EditMealFormModal