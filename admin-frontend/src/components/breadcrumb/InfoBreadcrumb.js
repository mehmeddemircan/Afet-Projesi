import React from 'react'
import { Breadcrumb } from 'antd';
const InfoBreadcrumb = (props) => {
  return (

   
      <Breadcrumb
        className='my-4 '
        items={props.items}
      />
    );


}

export default InfoBreadcrumb