import { Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddPersonType } from '../../../redux/actions/PersonTypeActions'
import AddEditPersonTypeForm from '../../form/AddEditPersonTypeForm'

const AddPersonTypeModal = ({showAddPersonModal,handleCloseAddPersonModal}) => {

  const [name, setName] = useState("")
  const addPersonType = useSelector((state) => state.personType.addPersonType)
  const dispatch = useDispatch()
  const handleAddPersonType = () => {
    dispatch(AddPersonType({name}))

    if (!addPersonType.success) {
      handleCloseAddPersonModal()
    }
  }

  return (
    <Fragment>
      
        <Modal
 
        centered
        open={showAddPersonModal}
        onOk={handleAddPersonType}
        onCancel={handleCloseAddPersonModal}
      >
        <AddEditPersonTypeForm 
        name={name}
        setName={setName}
      />
      </Modal>
      
    </Fragment>
  )
}

export default AddPersonTypeModal