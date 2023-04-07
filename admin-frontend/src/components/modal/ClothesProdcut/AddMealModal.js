import { Modal } from 'antd'
import React from 'react'

const AddMealModal = ({handleCloseAddMealModal,showAddMealModal}) => {
  return (
 
    <Modal
 
    centered
    open={showAddMealModal}
    onOk={handleCloseAddMealModal}
    onCancel={handleCloseAddMealModal}
  >
    <h2> Meal Modal</h2>
  </Modal>
  )
}

export default AddMealModal