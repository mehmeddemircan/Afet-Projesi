import { Button, Popover } from 'antd';
import React, { useState } from 'react'
import ReqProductMapTag from '../../tag/ReqProductMapTag';
import ReqPersonMapTag from '../../tag/ReqPersonMapTag';

const AreaMarker = ({area,text}) => {

    
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handlePopoverVisibleChange = (visible) => {
    setIsPopoverVisible(visible);
  };

  return (
    <Popover
      open={isPopoverVisible}
      onOpenChange={handlePopoverVisibleChange}
      content={
        <div>
          <div className="d-flex justify-content-start ">
            <p className="me-2">
              latitude {area.coordinates.latitude.toFixed(6)} |
            </p>
            <p>longitude {area.coordinates.longitude.toFixed(6)}</p>
          </div>

          <p
            style={{
              maxWidth: "260px",
            }}
            className="d-flex flex-wrap justify-content-start"
          >
            <span className="mt-1">gerekli ürünler : </span>
            {area.requrired_products.length == 0 ? (
              <span className="ms-1 mt-1">ihtiyac yok</span>
            ) : (
              area.requrired_products.map((product) => (
                <ReqProductMapTag key={product._id} product={product} />
              ))
            )}
          </p>
          <hr />
          <p
            style={{
              maxWidth: "260px",
            }}
            className="d-flex flex-wrap justify-content-start flex-1"
          >
            <span className="mt-1">gerekli insanlar : </span>
            {area.requrired_people.length == 0 ? (
              <span className="ms-1 mt-1">ihtiyac yok</span>
            ) : (
              area.requrired_people.map((person) => (
                <ReqPersonMapTag person={person} key={person._id} />
              ))
            )}
          </p>
       
        </div>
      }
      title={
        <div className="d-flex justify-content-between">
          <a>{text}</a>
       
        </div>
      }
    >
      <Button type="default" icon={<i class="fa-solid fa-hand"></i>}></Button>
    </Popover>
  )
}

export default AreaMarker