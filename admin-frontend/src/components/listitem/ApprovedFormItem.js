import { Descriptions, List, Tooltip } from 'antd'
import React, { Fragment } from 'react'

const ApprovedFormItem = ({form, handleDeleteForm}) => {
  return (
<Fragment>
<List.Item key={form._id} className="card my-3 px-2">
        <Descriptions
          title={
            <div className="d-flex justify-content-between">
              <a>User Info</a>{" "}
              <div>
              
              <Tooltip title="Delete">
                <button className="btn btn-light" onClick={() => handleDeleteForm(form._id)} >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </Tooltip>
            
              </div>
            </div>
          }
        >
          <Descriptions.Item label="UserName">{form.name}</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </List.Item>
</Fragment>
  )
}

export default ApprovedFormItem