import React, { useEffect, useState } from 'react'
import MainLayout from '../components/layout/MainLayout'

const LocationPage = () => {
    const [location, setLocation] = useState(null)
    useEffect(() => {
        if ('permissions' in navigator) {
          navigator.permissions.query({ name: 'geolocation' }).then(result => {
            if (result.state === 'granted') {
              // Permission already granted
              navigator.geolocation.getCurrentPosition(position => {
                setLocation(position.coords);
              });
            } else if (result.state === 'prompt') {
              // Ask user for permission
              navigator.geolocation.getCurrentPosition(position => {
                setLocation(position.coords);
              }, error => console.log(error));
            } else {
              // Permission denied
              console.log('Permission denied');
            }
          });
        } else {
          // Permissions API not supported
          console.log('Permissions API not supported');
        }
      }, []);
  return (
    <MainLayout>
        <h2>location page</h2>
       <div>
    {location && (
      <p>
        Latitude: {location.latitude}, Longitude: {location.longitude}
      </p>
    )}
  </div>
    </MainLayout>
  )
}

export default LocationPage