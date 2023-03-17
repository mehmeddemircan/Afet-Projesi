import React from 'react'

const DeleteCategoryButton = ({handleDeleteCategory,category}) => {
  return (
    <button className='btn btn-sm btn-danger rounded-pill' onClick={() => handleDeleteCategory(category._id)} >Delete </button>
  )
}

export default DeleteCategoryButton