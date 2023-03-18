import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import HomeJumbotron from '../components/jumbotron/HomeJumbotron'
import MyMap from '../components/map/MapView'



const HomePage = () => {
  return (
        <MainLayout>

            <HomeJumbotron />
          <MyMap />
        </MainLayout>
  )
}

export default HomePage