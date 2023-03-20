import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import HomeJumbotron from '../components/jumbotron/HomeJumbotron'




import SimpleMap from '../components/map/MapComponent'




const HomePage = () => {
  return (
        <MainLayout>

            <HomeJumbotron />
      
   
          <SimpleMap />
        </MainLayout>
  )
}

export default HomePage