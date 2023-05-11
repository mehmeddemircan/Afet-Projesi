import React, { Fragment } from 'react'

const UserFilterButtons = ({handleToggleShowLiveLocationUsers}) => {
  return (
    <Fragment>

        <div className='row mb-3'>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-outline-secondary rounded-pill mx-2' onClick={handleToggleShowLiveLocationUsers}>Live Location</button>
             
            </div>
        </div>
    </Fragment>
  )
}

export default UserFilterButtons