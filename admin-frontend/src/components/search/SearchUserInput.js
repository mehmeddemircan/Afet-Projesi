import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SearchUser } from '../../redux/actions/UserActions'

const SearchUserInput = ({name,setName}) => {


  const dispatch = useDispatch()
  const handleSearchUsers = (e) => {
    setName(e.target.value)
    dispatch(SearchUser(name))
    // if (e.Key == "Enter") {
    //   dispatch(SearchUser(name))
    // }
  }



  return (
    <Fragment>
       <div className='row'>
      <div className='d-flex justify-content-center'>
        <input 
          className='form-control'
          placeholder='Search user...'
          value={name}
          onChange={handleSearchUsers  }
         
        />
      </div>
    </div>
    </Fragment>
  )
}

export default SearchUserInput