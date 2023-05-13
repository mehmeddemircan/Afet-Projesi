import { Card , Carousel, Image, Tooltip } from 'antd'
import React from 'react'
const {Meta} = Card
const BrandCard = ({brand}) => {
  return (
    <Card
    className="my-2 mx-2"
    hoverable={true}
    style={{
      width: 300,
    }}
    cover={
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <img width={300} height={200} alt="example" src={brand.image} />

      
      </div>
    }
  >
    <div className="d-flex flex-row flex-wrap justify-content-between align-items-center" >
    <a
      href={`/markalar/${brand._id}`}
      className="text-dark fs-5 w-90"
      style={{ textDecorationLine: "none" }}
    >
      {brand.name}
    </a>
   
    </div>
  </Card>
  )
}

export default BrandCard