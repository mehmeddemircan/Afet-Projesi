import React from 'react'
import { useNavigate } from 'react-router-dom';

const FormCategoryButton = ({category}) => {

    const navigate = useNavigate()

  return (
    <button
              onClick={() => {
                navigate(category._id);
              }}
              className="btn btn-outline-primary mx-2 my-2"
              key={category._id}
            >
              {category.name}
            </button>
  )
}

export default FormCategoryButton