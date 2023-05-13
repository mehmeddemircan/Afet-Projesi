import React from 'react'
import { Button, Result } from 'antd';
import MainLayout from '../components/layout/MainLayout'
import MetaTitle from '../meta/MetaTitle'

const NotFoundPage = () => {
  return (
    <MainLayout>
    <MetaTitle title="Sayfa Bulunamadı Üzgünüz" name="sayfaBulunamadıÜzgünüz" content="sayfaBulunamadıÜzgünüz" />
     <Result
status="404"
title="404"
subTitle="Sorry, the page you visited does not exist."
extra={<Button href='/' type="primary">Anasayfaya Dön</Button>}
/>
</MainLayout>
  )
}

export default NotFoundPage