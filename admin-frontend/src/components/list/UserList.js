import { List } from 'antd'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import UserItem from '../listitem/UserItem'


const UserList = ({name}) => {

    const getAllUser = useSelector((state) => state.getAllUser)
    const searchUsers = useSelector((state) => state.searchUsers)
    
    return (

        <Fragment>
 <List className="my-4" itemLayout="horizontal">
            { name ? 
           <>{searchUsers.users.map((user) => (
            <UserItem key={user._id} user={user} />
           ))}</> 
         :   getAllUser.users.map((user) => (
            <UserItem key={user._id} user={user} />
        ))   }
 </List>
        </Fragment>
    )
}

export default UserList



