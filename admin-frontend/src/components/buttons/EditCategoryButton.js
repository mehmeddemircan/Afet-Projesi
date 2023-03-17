import React, { Fragment } from 'react'

const EditCategoryButton = ({handleShowEditCategoryModal}) => {
  return (
    <Fragment>
          <button className='btn btn-light btn-sm rounded-pill ' style={{fontSize:'14px'}} onClick={handleShowEditCategoryModal}>Edit</button>
    </Fragment>
  )
}

export default EditCategoryButton