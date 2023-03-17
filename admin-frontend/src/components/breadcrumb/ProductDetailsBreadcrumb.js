import React from 'react'
import { Breadcrumb } from 'antd';
const ProductDetailsBreadcrumb = () => {
  return (

   
      <Breadcrumb
        className='my-4 ms-3'
        items={[
          {
            title: 'Home',
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: 'An Application',
          },
        ]}
      />
    );


}

export default ProductDetailsBreadcrumb