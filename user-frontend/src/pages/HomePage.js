import React from 'react'
import {Button} from 'antd'
import MainLayout from '../components/layout/MainLayout'
import MetaTitle from '../meta/MetaTitle'
import BrandCategoryCard from '../components/card/BrandCategoryCard'
const HomePage = () => {
  return (
      <MainLayout>
        <MetaTitle title="Anasayfa" name="Anasayfa" content="Anasayfa" />
          <BrandCategoryCard />
      </MainLayout>
  )
}

export default HomePage