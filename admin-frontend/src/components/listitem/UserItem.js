import { Button, List, Popover, Space, Tag, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUserTasks,
  GiveRoleToUser,
  UpdateUserRole,
} from "../../redux/actions/UserActions";
import TaskDrawer from "../drawer/TaskDrawer";
import { GetAllTaskNotAdded } from "../../redux/actions/UserActions";
import {
  ADD_TASK_TO_USER_RESET,
  REMOVE_TASK_TO_USER_RESET,
} from "../../redux/constants/UserConstants";
import { useNavigate } from "react-router-dom";
const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMakeAdmin = () => {
    dispatch(UpdateUserRole(user._id));
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const { loading } = useSelector((state) => state.user.getUserTasks);
  const [userId, setUserId] = useState("");

  const handleOpenDrawer = (id) => {
    setUserId(id);
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const getAllPersonType = useSelector(
    (state) => state.personType.getAllPersonType
  );
  const [role, setRole] = useState(user.role);

  const updateUserRole = useSelector((state) => state.user.updateUserRole);

  const handleGiveRoleToUser = (value) => {
    setRole(value);

    dispatch(GiveRoleToUser(user._id, { role: value }));
  };

  return (
    <List.Item
      //update role
      actions={[
        <>
          {user.location && (
            <Space wrap>
              <Popover
                content={
                  <>
                    {role}
                    <div className="d-flex flex-column">
                      {getAllPersonType.personTypes.map((personType) => (
                        <button
                          key={personType._id}
                          className="btn  btn-sm btn-light rounded-pill text-white my-1"
                          style={{ background: "rgb(255,56,92)" }}
                          onClick={() => handleGiveRoleToUser(personType.name)}
                        >
                          {personType.name}
                        </button>
                      ))}
                    </div>
                  </>
                }
                placement="left"
                trigger="click"
              >
                <Button type="primary" shape="round" className="mx-2">
                  Roles
                </Button>
              </Popover>
            </Space>
          )}

          <button
            className="btn btn-sm btn-light text-dark rounded-pill me-2"
            onClick={handleMakeAdmin}
            style={{
              border: "2.4px solid rgb(221,221,221)",
            }}
          >
            Make Admin{" "}
          </button>
          <button
            className="btn btn-sm btn-light text-white rounded-pill"
            onClick={() => handleOpenDrawer(user._id)}
            style={{ background: "#222" }}
            // onClickCapture={() => navigate(`/kullanicilar/${user._id}/gorevler`)}
          >
            Add Task{" "}
          </button>

          {openDrawer && (
            <TaskDrawer
              userId={userId}
              key={user._id}
              user={user}
              openDrawer={openDrawer}
              handleCloseDrawer={handleCloseDrawer}
            />
          )}
        </>,
      ]}
    >
      <List.Item.Meta
        title={<a>{user.name}</a>}
        description={
          <>
            <p className="my-1">Email : {user.email}</p>

            <p>
              Role :
              <Tag
                color="#108ee9"
              >
                {user.role}
              </Tag>
            </p>
          </>
        }
      />
    </List.Item>
  );
};

export default UserItem;
