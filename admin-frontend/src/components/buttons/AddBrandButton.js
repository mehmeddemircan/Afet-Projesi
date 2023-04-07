import React, { Fragment, useState } from 'react'
import AddBrandModal from '../modal/Brand/AddBrandModal'

const AddBrandButton = () => {

    const [showAddBrandModal, setShowAddBrandModal] = useState(false)

    const handleShowAddBrandModal = () => {
        setShowAddBrandModal(true)
    }

    const handleCloseAddBrandModal = () => {
        setShowAddBrandModal(false)
    }

  return (
    <Fragment>
           <div className='d-flex flex-row justify-content-end mt-4'>
            <button className='btn btn-outline-primary rounded-pill' onClick={handleShowAddBrandModal}> Add Brand</button>
          </div>
            <AddBrandModal 
                showAddBrandModal={showAddBrandModal}
                handleCloseAddBrandModal={handleCloseAddBrandModal}
            />
    </Fragment>
  )
}

export default AddBrandButton