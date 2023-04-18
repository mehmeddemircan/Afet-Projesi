import { Select, Space } from 'antd'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
const {Option} = Select
const FiltersButtonUserContent = ({handleAddUserRole}) => {

  const getAllPersonType = useSelector((state) => state.personType.getAllPersonType);

  return (
    <Fragment>
  
    <Space
      style={{
        width: "300px",
      }}
      direction="vertical"
    >
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
        }}
        placeholder="Please select"
        onChange={handleAddUserRole}
      >
        {getAllPersonType.personTypes.map((person) => (
          <Option value={person.name}>{person.name}</Option>
        ))}
      </Select>
      </Space>
  </Fragment>
  )
}

export default FiltersButtonUserContent