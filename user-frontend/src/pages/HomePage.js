import React from 'react'
import {Button} from 'antd'
import MainLayout from '../components/layout/MainLayout'
import MetaTitle from '../meta/MetaTitle'
const HomePage = () => {
  return (
      <MainLayout>
        <MetaTitle title="Anasayfa" name="Anasayfa" content="Anasayfa" />
          <Button>HomePage</Button>
      </MainLayout>
  )
}

export default HomePage