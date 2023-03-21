import React, { Fragment } from 'react'

const AddButton = (props) => {
  return (
    <Fragment>
         <div className="row my-3">
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-primary rounded-3"
            onClick={props.onClick}
          >
                {props.name}
          </button>
          </div>
          </div>
    </Fragment>
  )
}

export default AddButton