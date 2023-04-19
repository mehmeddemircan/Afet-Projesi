import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
const {Meta } = Card
const BrandSliderCard = ({brand}) => {
  return (
    <Link
    className="text-dark"
    style={{
      textDecorationLine: "none",
    }}
  >
    <Card
      hoverable
      style={{ width: 240, borderRadius: 20, marginBottom: 10 }}
      cover={
        <img
          style={{
            height: 160,
            objectFit: "cover",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          alt="product name"
          src={brand.image}
        />
      }
    >
      <Meta title={brand.name} description={<h5>Special homes</h5>} />
    </Card>
  </Link>
  )
}

export default BrandSliderCard