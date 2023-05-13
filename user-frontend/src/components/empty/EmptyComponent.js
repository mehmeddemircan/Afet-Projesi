import React from 'react'
import { Empty } from 'antd';
const EmptyComponent = () => {
  return (
   
      <div className='d-flex justify-content-center align-items-center' style={{width:'100%'}}>
        <Empty description={<h4>Maalesef herhangi bir kayıt bulamadık</h4>} image="https://img.freepik.com/free-vector/empty-concept-illustration_114360-7416.jpg" imageStyle={{width : '50%', height : '50%'}} />
          
     
      </div>
   
  )
}

export default EmptyComponent