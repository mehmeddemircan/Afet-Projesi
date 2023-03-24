import { Descriptions, List } from 'antd'
import React, { Fragment } from 'react'

const FormInfoItem = ({form}) => {
  return (
    <Fragment>
           <List.Item key={form._id} className="card my-3 px-2">
            <Descriptions title="User Info">
              <Descriptions.Item label="UserName">
                {form.name} 
              </Descriptions.Item>
              <Descriptions.Item label="Telephone">
                1810000000
              </Descriptions.Item>
              <Descriptions.Item label="Live">
                Hangzhou, Zhejiang
              </Descriptions.Item>
              <Descriptions.Item label="Remark">empty</Descriptions.Item>
              <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>
          </List.Item>
    </Fragment>
  )
}

export default FormInfoItem