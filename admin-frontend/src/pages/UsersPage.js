import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import UserList from "../components/list/UserList";
import { useDispatch, useSelector } from "react-redux";
import { AllUser } from "../redux/actions/UserActions";
import { Pagination } from "antd";
import SearchUserInput from "../components/search/SearchUserInput";
import {  UPDATE_USER_ROLE_RESET } from "../redux/constants/UserConstants";
import {toast} from 'react-toastify'
import UserFilterButtons from "../components/buttons/UserFilterButtons";
const UsersPage = () => {
  const getAllUser = useSelector((state) => state.getAllUser);
  const updateUserRole = useSelector((state) => state.updateUserRole);
  

  const [name, setName] = useState("")

  

  const dispatch = useDispatch();
  const [limit, setLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(AllUser(limit, currentPage));

    if (updateUserRole.success) {
      toast(updateUserRole.message)
      dispatch({type : UPDATE_USER_ROLE_RESET})
    }

  }, [dispatch, limit, currentPage,updateUserRole.success]);

  return (
    <MainLayout>
      <h5 className="my-3 text-center">UsersPage</h5>
      <UserFilterButtons />
      <SearchUserInput name={name} setName={setName} />
  
      <UserList name={name}/>

      <div className="row">
        <div className="d-flex justify-content-end">
          <Pagination
            onChange={(page) => setCurrentPage(page)}
            current={currentPage}
            defaultCurrent={1}
            pageSize={limit}
            total={getAllUser.totalLength}
          />
        </div>
      </div>
      {/* Arama Component */}
      {/* Filter Buttons */}
      {/* Badge */}
      {/* Liste Component */}
      {/* Pagination */}
    </MainLayout>
  );
};

export default UsersPage;
