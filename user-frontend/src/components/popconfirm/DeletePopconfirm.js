import React from 'react'
import { Button, Popconfirm } from 'antd';
const DeletePopconfirm = ({itemName,children,confirm}) => {
  return (
    <Popconfirm
    title={`${itemName} Sil `}
    description={`Bu  ${itemName} silmek istediğinizden emin misiniz ?`  }
    onConfirm={confirm}

    okText="Evet"
    cancelText="Hayir"
  >
    {children}
  </Popconfirm>
  )
}

export default DeletePopconfirm