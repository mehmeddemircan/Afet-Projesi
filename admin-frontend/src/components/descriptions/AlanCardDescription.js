import { Descriptions } from 'antd'
import React, { Fragment } from 'react'

const AlanCardDescription = () => {
  return (
   <Fragment>
     <Descriptions>
                  <Descriptions.Item className="mx-0" label="Longitude">
                    100
                  </Descriptions.Item>
                  <Descriptions.Item
                    className="d-flex justify-content-center"
                    label="Latitude"
                  >
                    100
                  </Descriptions.Item>
                </Descriptions>

                <Descriptions>
                  <Descriptions.Item label="Required Products">
                    Zhou Maomao Zhou Maomao Zhou Maomao
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