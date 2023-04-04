import { List } from 'antd'
import React from 'react'

import CityItem from '../listitem/CityItem'

const CityList = ({countryItem}) => {

 

  return (
    <div
    className="scrollbar-ripe-malinka"
    style={{ maxHeight: "400px", overflowY: "auto" }}
  >
    <List className='my-4 px-5' itemLayout='horizontal' >
        {countryItem.cities.map((city,index) => (
            <CityItem index={index+1} key={city._id} city={city} />
        ))}
    </List>
    </div>
  )
}

export default CityList