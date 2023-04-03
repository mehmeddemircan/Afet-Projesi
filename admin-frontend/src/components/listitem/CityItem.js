import { List } from 'antd'
import React from 'react'
import CityTag from '../tag/CityTag'

const CityItem = ({city,index}) => {
  return (
    <List.Item
    actions={[
    //   <button
    //     className="btn btn-light btn-sm w-100"
    //       onClick={handleToggleShowCities}
    //   >
    //       {isShowCities ? "Close" : "Show Cities"}
    //   </button>,
      
    //   <button
    //     className="btn btn-light btn-sm w-100 "
    //     onClick={handleShowAddCityModal}
    //   >
    //     <i class="fa-solid fa-plus"></i> Add City{" "}
    //   </button>,
    //   <AddCityModal
    //     countryItem={countryItem}
    //     showAddCityModal={showAddCityModal}
    //     handleCloseAddCityModal={handleCloseAddCityModal}
    //   />,
    ]}
  >
    <List.Item.Meta title={<div><span className='me-4'>{index}</span><CityTag city={city} /></div>} />
  </List.Item>
  )
}

export default CityItem