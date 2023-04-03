import { Tag } from 'antd'
import React from 'react'

const CityTag = ({city}) => {
  return (
    <Tag color="#f50">{city.name}</Tag>
  )
}

export default CityTag