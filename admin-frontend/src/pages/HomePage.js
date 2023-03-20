import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import HomeJumbotron from '../components/jumbotron/HomeJumbotron'



import GoogleMapComponent from '../components/map/GoogleMapComponent'
import SimpleMap from '../components/map/Deneme'




const HomePage = () => {
  return (
        <MainLayout>

            <HomeJumbotron />
      
   
          <SimpleMap />
        </MainLayout>
  )
}

export default HomePage