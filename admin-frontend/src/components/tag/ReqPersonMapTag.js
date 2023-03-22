import { Badge, Tag } from 'antd'
import React from 'react'

const ReqPersonMapTag = ({person}) => {
  return (
    <div className="mt-2 ms-2">
                    <Badge count={person.quantity} className="me-2">
                      <Tag color="#f50">{person.Person.name}</Tag>
                    </Badge>
                  </div>
  )
}

export default ReqPersonMapTag