import { Badge, Tag } from 'antd'
import React from 'react'

const ReqProductMapTag = ({product}) => {
  return (
    <div className="mt-2 ms-2">
    <Badge count={product.quantity} className="me-2">
      <Tag color="#f50">{product.Product.title}</Tag>
    </Badge>
  </div>
  )
}

export default ReqProductMapTag