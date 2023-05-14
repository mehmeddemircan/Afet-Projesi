import React, { useState } from 'react'
import { Fragment } from 'react'
import MainHeader from '../header/MainHeader'
import MainFooter from '../footer/MainFooter'
import BackTopButton from '../backtop/BackTopButton'
import ShowMapButton from '../floatbutton/ShowMapButton'
import GoogleMapComp from '../map/GoogleMapComp'
import { useDispatch } from 'react-redux'
import { AllArea } from '../../redux/actions/AreaActions'

const MainLayout = ({children}) => {

  const [showMap, setShowMap] = useState(false);
  const dispatch = useDispatch()
  const handleToggleShowMap = () => {
    setShowMap((prev) => !prev);
    if (!showMap) {
      dispatch(AllArea([],[],[]))
    }
  };

  return (
        <Fragment>
            <MainHeader />

            {showMap ? (
        <>
          <GoogleMapComp />
        </>
      ) : (
        <div className="container">{children}</div>
      )}
      <ShowMapButton
        handleToggleShowMap={handleToggleShowMap}
        showMap={showMap}
      />
         <BackTopButton />
            <MainFooter />
        </Fragment>
  )
}

export default MainLayout