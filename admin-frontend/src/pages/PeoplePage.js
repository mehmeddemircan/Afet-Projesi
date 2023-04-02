import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import AddPersonTypeButton from "../components/buttons/AddPersonTypeButton";
import PersonTypeList from "../components/list/PersonTypeList";
import { useDispatch, useSelector } from "react-redux";
import { AllPersonType } from "../redux/actions/PersonTypeActions";
import {
  ADD_PERSONTYPE_RESET,
  DELETE_PERSONTYPE_RESET,
  UPDATE_PERSONTYPE_RESET,
} from "../redux/constants/PersonTypeConstants";
import InfoBreadcrumb from "../components/breadcrumb/InfoBreadcrumb";
import { Badge } from "antd";
const PeoplePage = () => {
  const addPersonType = useSelector((state) => state.personType.addPersonType);
  const deleteUpdatePersonType = useSelector(
    (state) => state.personType.deleteUpdatePersonType
  );
  const getAllPersonType = useSelector((state) => state.personType.getAllPersonType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllPersonType());
    if (addPersonType.success) {
      dispatch({ type: ADD_PERSONTYPE_RESET });
    }
    if (deleteUpdatePersonType.updateSuccess) {
      dispatch({ type: UPDATE_PERSONTYPE_RESET });
    }
    if (deleteUpdatePersonType.deleted) {
      dispatch({ type: DELETE_PERSONTYPE_RESET });
    }
  }, [
    dispatch,
    addPersonType.success,
    deleteUpdatePersonType.updateSuccess,
    deleteUpdatePersonType.deleted,
  ]);

  return (
    <MainLayout>
      <InfoBreadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: (
              <a href="/kisiler" onClick={(e) => e.preventDefault()}>
                Person Types
              </a>
            ),
          },
          {
            title: (
              <>
                <Badge
                  className="mx-2 "
                  color="#faad14"
                  count={getAllPersonType.personTypes.length}
                >
                  <a className="me-2">Length</a>
                </Badge>
              </>
            ),
          },
        ]}
      />
      <AddPersonTypeButton />
      <PersonTypeList />
    </MainLayout>
  );
};

export default PeoplePage;
