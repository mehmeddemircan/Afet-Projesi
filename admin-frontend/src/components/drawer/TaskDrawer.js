import { Drawer } from 'antd'
import React, { Fragment } from 'react'
import UserTaskList from '../list/UserTaskList'

const TaskDrawer = ({user,handleCloseDrawer,openDrawer}) => {
  return (
  <Fragment>
    <Drawer width={512}  title="Basic Drawer" placement="right" onClose={handleCloseDrawer} open={openDrawer}>
       
        <UserTaskList user={user} />
      </Drawer>
  </Fragment>
  )
}

export default TaskDrawer