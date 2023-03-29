import { List, message } from 'antd'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserItem from '../listitem/UserItem'
import { ADD_TASK_TO_USER_RESET } from '../../redux/constants/UserConstants'


const UserList = ({name}) => {

    const getAllUser = useSelector((state) => state.getAllUser)
    const searchUsers = useSelector((state) => state.searchUsers)
 

    return (

        <Fragment>
 <List className="my-4" itemLayout="horizontal">
            { name ? 
           <>{searchUsers.users.map((user) => (
            <UserItem key={`search-${user._id}`} user={user} />
           ))}</> 
         :   getAllUser.users.map((user) => (
            <UserItem key={user._id} user={user} />
        ))   }
 </List>
        </Fragment>
    )
}

export default UserList



