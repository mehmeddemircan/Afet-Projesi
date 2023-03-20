import { Descriptions } from 'antd'
import React, { Fragment, useState } from 'react'

const AlanCardDescription = ({area}) => {



  return (
   <Fragment>
     <Descriptions>
                 
                  <Descriptions.Item
                    className="mx-0"
                    label="Latitude"
                  >
                    {area && area.coordinates !== null  ? area.coordinates.latitude  : null}
                  </Descriptions.Item>
                  <Descriptions.Item className="d-flex justify-content-center" label="Longitude">
                  {area && area.coordinates !== null  ? area.coordinates.longitude  : null}
                  </Descriptions.Item>
                </Descriptions>

                <Descriptions>
                  <Descriptions.Item label="Required Products">
                    {area.name}
                  </Descriptions.Item>
                </Descriptions>
                <Descriptions>
                  <Descriptions.Item label="Required People">
                    Zhou Maomao Zhou Maomao Zhou Maomao
                  </Descriptions.Item>
                </Descriptions>
   </Fragment>
  )
}

export default AlanCardDescription