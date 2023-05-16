import React from "react";
import { Fragment } from "react";
import { logout } from "../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Popover, Avatar } from "antd";
import FormMenuDropDown from "../dropdown/FormMenuDropdown";
import { GetUserTasks } from "../../redux/actions/TaskActions";
import LoadingSpinner from "../spinner/LoadingSpinner";
import UserTaskItem from "../listItem/UserTaskItem";
import { useEffect } from "react";
const LoggedInSegment = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // çıkış yapma işlemi
  const LogoutHandler = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  const getUserTasks = useSelector((state) => state.task.getUserTasks);

  useEffect(() => {
    dispatch(GetUserTasks(auth.user._id));
  }, [dispatch, auth]);

  return (
    <Fragment>
      <Popover
        title="Görevlerim"
        trigger={"click"}
        placement="bottom"
        content={
          <>
            {getUserTasks.loading ? (
              <LoadingSpinner />
            ) : getUserTasks.userTasks.length === 0 ? (
              <h4>Henüz göreviniz yoktur</h4>
            ) : (
              getUserTasks.userTasks.map((userTask) => (
                <UserTaskItem key={userTask._id} userTask={userTask} />
              ))
            )}
          </>
        }
      >
        <button className="btn btn-sm btn-light rounded-pill text-center mx-2">
          <i class="fa-solid fa-bell fs-6"></i>
        </button>
      </Popover>
      <FormMenuDropDown />

      <Popover
        content={
          <ul class="list-group">
            <li class="list-group-item  border-0">
              <div className="d-inline-flex align-items-center">
                <i class="fa-solid fa-user me-2"></i>
                <a
                  style={{ textDecorationLine: "none", color: "#222" }}
                  href="/profilim"
                >
                  Profil
                </a>{" "}
              </div>
            </li>
            <li
              class="list-group-item border-0"
              onClick={() => navigate("/favorilerim", { replace: true })}
            >
              <div className="d-inline-flex align-items-center">
                <i class="fa-solid fa-shopping-cart me-2"></i>
                <a>Sepetim </a>{" "}
              </div>
            </li>
            <hr />
            <li class="list-group-item border-0" onClick={LogoutHandler}>
              <div className="d-inline-flex align-items-center">
                <i class="fa-solid fa-right-from-bracket me-2"></i>
                <a>Çıkış Yap</a>{" "}
              </div>
            </li>
          </ul>
        }
        title={
          <>
             <a>
            {auth.user.name}
          </a>
          <hr />
          </>
       
        }
      >
        <button
          className="btn btn-light rounded-pill d-inline-flex align-items-center "
          style={{ border: "1px solid #fff" }}
        >
          <i class="fa-solid fa-bars mx-2 mt-1"></i>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
            size={"small"}
          />
        </button>
      </Popover>
    </Fragment>
  );
};

export default LoggedInSegment;
