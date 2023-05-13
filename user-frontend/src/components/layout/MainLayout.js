import React from 'react'
import { Fragment } from 'react'
import MainHeader from '../header/MainHeader'
import MainFooter from '../footer/MainFooter'

const MainLayout = ({children}) => {
  return (
        <Fragment>
            <MainHeader />
            <div className='container'>{children}</div>
            <MainFooter />
        </Fragment>
  )
}

export default MainLayout