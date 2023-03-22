import React, { Fragment } from 'react'

const AddButton = (props) => {
  return (
    <Fragment>
     
          <button
            className="btn btn-outline-primary rounded-3"
            onClick={props.onClick}
          >
                {props.name}
          </button>
       
    </Fragment>
  )
}

export default AddButton