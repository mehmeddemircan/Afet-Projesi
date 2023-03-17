import React, { useEffect } from 'react'
import MainLayout from '../components/layout/MainLayout'
import AddPersonTypeButton from '../components/buttons/AddPersonTypeButton'
import PersonTypeList from '../components/list/PersonTypeList'
import { useDispatch, useSelector } from 'react-redux'
import { AllPersonType } from '../redux/actions/PersonTypeActions'
import { ADD_PERSONTYPE_RESET, DELETE_PERSONTYPE_RESET, UPDATE_PERSONTYPE_RESET } from '../redux/constants/PersonTypeConstants'
const PeoplePage = () => {

  const addPersonType = useSelector((state) => state.addPersonType)
  const deleteUpdatePersonType = useSelector((state) => state.deleteUpdatePersonType)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AllPersonType())
    if (addPersonType.success) {
      dispatch({type: ADD_PERSONTYPE_RESET})
    }
    if (deleteUpdatePersonType.updateSuccess) {
      dispatch({type : UPDATE_PERSONTYPE_RESET})
    }
    if (deleteUpdatePersonType.deleted) {
      dispatch({type : DELETE_PERSONTYPE_RESET})
    }
  }, [dispatch,addPersonType.success,deleteUpdatePersonType.updateSuccess,deleteUpdatePersonType.deleted])

  return (
    <MainLayout>
        <AddPersonTypeButton />
        <PersonTypeList />
    </MainLayout>
  )
}

export default PeoplePage