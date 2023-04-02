import { Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddPersonType } from '../../../redux/actions/PersonTypeActions'

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
        <form>
          <div class="form-group">
            <h4 class="text-center">New Person Type </h4>
            <label for="recipient-name" class="col-form-label">
              Person Type{" "}
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

export default AddPersonTypeModal