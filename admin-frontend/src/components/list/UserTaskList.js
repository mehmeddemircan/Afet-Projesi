import { List } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import UserTaskItem from "../listitem/UserTaskItem";
import { useSelector } from "react-redux";
import EmptyComponent from "../empty/EmptyComponent";

const UserTaskList = ({ user }) => {
  const { userTasks } = useSelector((state) => state.getUserTasks);
  const getNotAddedTasks = useSelector((state) => state.getNotAddedTasks);



  return (
    <Fragment>
      <div className="row fs-4">Tasks </div>
      <div
        className="scrollbar-ripe-malinka"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <List className="my-4" itemLayout="horizontal">
          {getNotAddedTasks.tasks.length == 0 ? (
            <EmptyComponent />
          ) : (
            getNotAddedTasks.tasks.map((userTask) => (
              <UserTaskItem key={userTask._id} userTask={userTask} user={user} addedTask={false} />
            ))
          )}
        </List>
      </div>

      <div className="row fs-4">Added Tasks </div>
      <div
        className="scrollbar-ripe-malinka"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <List className="my-4" itemLayout="horizontal">
          {userTasks.length == 0 ? (
            <EmptyComponent />
          ) : (
            userTasks.map((userTask) => (
              <UserTaskItem key={`users-${userTask._id}`} userTask={userTask} user={user} addedTask={true}/>
            ))
          )}
        </List>
      </div>
    </Fragment>
  );
};

export default UserTaskList;
