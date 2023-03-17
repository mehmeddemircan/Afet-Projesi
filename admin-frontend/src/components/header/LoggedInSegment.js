import React, { Fragment } from 'react'
import { Dropdown, Space } from "antd";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import { Button, Popover } from 'antd';
const LoggedInSegment = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const LogoutHandler = () => {
        dispatch(logout())
        navigate('/', {replace : true})
    }

  return (
    <Fragment>
        
        <Popover content={(
             <ul class="list-group ">
               <li class="list-group-item  border-0">Cras justo odio</li>
               <li class="list-group-item border-0">Dapibus ac facilisis in</li>
               <li class="list-group-item border-0">Morbi leo risus</li>
               <li class="list-group-item border-0">Porta ac consectetur ac</li>
               <li class="list-group-item border-0" ><a onClick={LogoutHandler} >Logout</a></li>
             </ul>
  )} title="Title">
   

           <button
              className="btn btn-light rounded-pill d-inline-flex align-items-center "
              style={{ border: "1px solid rgb(221,221,221)" }}
            >
              <i class="fa-solid fa-bars mx-2"></i>
               <img
                style={{ width: "25px" }}
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="img-fluid rounded-circle fs-4"
                alt="Avatar"
              /> 
          
            </button>
            </Popover>
    
    </Fragment>
  )
}

export default LoggedInSegment


