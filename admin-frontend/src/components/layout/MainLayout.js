import React, { Fragment } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import MainFooter from '../footer/MainFooter'

import BackTopButton from '../backtop/BackTop'
import ShowMapButton from '../floatbutton/ShowMapButton'





const MainLayout = (props) => {
  return (

        <Fragment>
            <Header />
            <div className='container'>
            {props.children}
            </div>
            <ShowMapButton />
                <BackTopButton />
            <MainFooter />
        </Fragment>

  )
}

export default MainLayout