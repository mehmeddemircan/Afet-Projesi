import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import UserList from "../components/list/UserList";
import { useDispatch, useSelector } from "react-redux";
import {
  AllUser,
  GetAllUserLocationsWithCount,
} from "../redux/actions/UserActions";
import { Pagination } from "antd";
import SearchUserInput from "../components/search/SearchUserInput";
import {
  GET_USER_LOCATIONS_WITH_COUNT_RESET,
  GET_USER_LOCATIONS_WITH_COUNT_SUCCESS,
  UPDATE_USER_ROLE_RESET,
} from "../redux/constants/UserConstants";
import { toast } from "react-toastify";
import UserFilterButtons from "../components/buttons/UserFilterButtons";
import { AllPersonType } from "../redux/actions/PersonTypeActions";
import MetaTitle from "../meta/MetaTitle";
const UsersPage = () => {
  const getAllUser = useSelector((state) => state.user.getAllUser);
  const updateUserRole = useSelector((state) => state.user.updateUserRole);

  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const [limit, setLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (!showLiveLocationUsers) {
      dispatch(AllUser(limit, currentPage));
    }

    if (updateUserRole.success) {
      toast(updateUserRole.message);
      dispatch({ type: UPDATE_USER_ROLE_RESET });
    }
  }, [dispatch, limit, currentPage, updateUserRole.success]);

  useEffect(() => {
    dispatch(AllPersonType());
  }, [dispatch]);

  //Live Location Button
  const [showLiveLocationUsers, setShowLiveLocationUsers] = useState(false);
  const handleToggleShowLiveLocationUsers = () => {
    setShowLiveLocationUsers((prev) => !prev);
  };

  useEffect(() => {
    if (showLiveLocationUsers) {
      dispatch(GetAllUserLocationsWithCount(limit, currentPage));
    }
    if (!showLiveLocationUsers) {
      dispatch({ type: GET_USER_LOCATIONS_WITH_COUNT_RESET });
    }
  }, [dispatch, limit, currentPage, showLiveLocationUsers]);

  const getAllUserLocationWithCount = useSelector(
    (state) => state.user.getAllUserLocationWithCount
  );

  return (
    <MainLayout>
      <MetaTitle
        title="Kullanıcılar"
        name="Kullanicilar"
        content="Kullanicilar"
      />
      <h5 className="my-3 text-center">UsersPage</h5>
      <UserFilterButtons
        handleToggleShowLiveLocationUsers={handleToggleShowLiveLocationUsers}
      />
      <SearchUserInput name={name} setName={setName} />

      <UserList
        name={name}
        showLiveLocationUsers={showLiveLocationUsers}
      
        getAllUserLocationWithCount={getAllUserLocationWithCount}
      />

      <div className="row">
        <div className="d-flex justify-content-end">
          <Pagination
            onChange={(page) => setCurrentPage(page)}
            current={currentPage}
            defaultCurrent={1}
            pageSize={limit}
            total={
              getAllUserLocationWithCount.success
                ? getAllUserLocationWithCount.totalLength
                : getAllUser.totalLength
            }
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
