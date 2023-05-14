import { Spin } from 'antd';
import React from 'react'
const LoadingSpinner = () => {
    return (
         <div className='d-flex justify-content-center align-items-center' style={{width : '100%'}}>
             <Spin size='large' />
       </div>
    )
};
export default LoadingSpinner;