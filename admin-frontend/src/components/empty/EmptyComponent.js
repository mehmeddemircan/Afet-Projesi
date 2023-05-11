import React from 'react'
import { Empty } from 'antd';
const EmptyComponent = () => {
  return (
   
      <div className='d-flex justify-content-center align-items-center' style={{width:'100vw'}}>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </div>
   
  )
}

export default EmptyComponent