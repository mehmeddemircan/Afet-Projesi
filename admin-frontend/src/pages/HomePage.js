import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import HomeJumbotron from '../components/jumbotron/HomeJumbotron'
import MapView from '../components/map/MapView'

const HomePage = () => {
  return (
        <MainLayout>

            <HomeJumbotron />
            <MapView />
        </MainLayout>
  )
}

export default HomePage