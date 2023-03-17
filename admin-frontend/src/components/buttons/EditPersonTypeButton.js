import React, { Fragment } from 'react'

const EditPersonTypeButton = ({handleShowEditPersonModal}) => {
  
  return (
   <Fragment>
        <button className='btn btn-light rounded-pill ' onClick={handleShowEditPersonModal}>Edit</button>
   </Fragment>
  )
}

export default EditPersonTypeButton