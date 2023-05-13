import React from 'react'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'

const MetaTitle = ({title,name,content}) => {
  return (
    <Helmet>
        <title>{title}</title>
    <meta name={name} content={content} />
    </Helmet>
  )
}

export default MetaTitle