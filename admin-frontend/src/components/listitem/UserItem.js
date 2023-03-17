import { List } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateUserRole } from "../../redux/actions/UserActions";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const handleMakeAdmin = () => {
    dispatch(UpdateUserRole(user._id));
  };

  return (
    <List.Item
      actions={[
        <>
          <button
            className="btn btn-sm btn-light text-white rounded-pill"
            onClick={handleMakeAdmin}
            style={{ background: "#222" }}
          >
            Make Admin{" "}
          </button>
        </>,
      ]}
    >
      <List.Item.Meta
        title={<a>{user.name}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  );
};

export default UserItem;
