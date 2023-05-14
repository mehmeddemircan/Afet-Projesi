import { Button, Result } from "antd";
import React from "react";

const SuccessResult = ({onClick}) => {
  return (
    <Result
      status="success"
      title="Başarılı Şekilde formunuz gönderilmiştir"
      subTitle="Biz sizinle iletişime geçeçeğiz en kısa sürede # iyi günler dileriz sağlıcakla kalın"
      extra={[
        <Button type="primary" key="console" onClick={onClick} >
          Tekrar Gönder
        </Button>,
      ]}
    />
  );
};

export default SuccessResult;
