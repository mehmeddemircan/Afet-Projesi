import { Select, Space } from 'antd'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
const {Option} = Select
const FiltersButtonAreaContent = ({handleChange}) => {

    
    const getAllProduct = useSelector((state) => state.product.getAllProduct)

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
        onChange={handleChange}
      >
        {getAllProduct.products.map((product) => (
          <Option value={product.title}>{product.title}</Option>
        ))}
      </Select>
    </Space>
  </Fragment>
  )
}

export default FiltersButtonAreaContent