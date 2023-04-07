import { Modal } from 'antd'
import React from 'react'

const AddHotelModal = ({showAddHotelModal,handleCloseAddHotelModal}) => {
  return (
    <Modal
 
    centered
    open={showAddHotelModal}
    onOk={handleCloseAddHotelModal}
    onCancel={handleCloseAddHotelModal}
  >
    <h2> Hotellll Modal</h2>
  </Modal>
  )
}

export default AddHotelModal