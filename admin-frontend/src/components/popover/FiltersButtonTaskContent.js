import { Select, Space } from 'antd'
import React, { Fragment } from 'react'
const {Option} = Select
const FiltersButtonTaskContent = () => {
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
        // onChange={handleChange}
      >
        {/* {getAllProduct.products.map((product) => (
          <Option value={product.title}>{product.title}</Option>
        ))} */}
      </Select>
    </Space>
  </Fragment>
  )
}

export default FiltersButtonTaskContent