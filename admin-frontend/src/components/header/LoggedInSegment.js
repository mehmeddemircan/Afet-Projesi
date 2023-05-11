import React, { Fragment } from 'react'
import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import { Button, Popover } from 'antd';
const LoggedInSegment = () => {
    const auth = useSelector((state) => state.auth)
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
               <li class="list-group-item  border-0"><i class="fa-solid fa-user me-2"></i>Profil</li>
               <li class="list-group-item border-0"><i class="fa-solid fa-hand-holding-dollar  me-2 "></i>Bağış Yap</li>
               <li class="list-group-item border-0"><i class="fa-solid fa-bell me-2"></i> Bildirimlerim</li>
               <li class="list-group-item border-0"><i class="fa-solid fa-check me-2 "></i> Görevlerim</li>
               <li class="list-group-item border-0" ><a onClick={LogoutHandler} ><i class="fa-solid fa-arrow-right-from-bracket me-2"></i> Çıkış Yap</a></li>
             </ul>
  )} title={<><div className='d-flex justify-content-start'>{auth.user.name}</div><hr /></>}>
   

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


