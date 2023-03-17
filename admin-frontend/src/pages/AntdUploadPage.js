import React, { useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import { Avatar, Badge, Button, Upload } from 'antd';
import axios from 'axios';
import Resizer from "react-image-file-resizer";


const AntdUploadPage = () => {

    const [images, setImages] = useState([])

      const [image, setImage] = useState("")
   

    const FileUploadChange = (e) => {
        let files = e.target.files;
        let allUploadedFiles = images;
        if (files) {
          for (let i = 0; i < files.length; i++) {
            Resizer.imageFileResizer(
              files[i],
              300,
              300,
              "JPEG",
              100,
              0,
              (uri) => {
                console.log(uri);
    
                axios
                  .post("/api/uploadimages", { image : uri })
                  .then((res) => {
                    console.log("IMAGE UPLOAD RES DATA", res);
                    allUploadedFiles.push(res.data);
    
                    setImages(allUploadedFiles)
                    setImage(images[0].url)
                  })
                  .catch((err) => {
                    console.log("Cloudinary upload err ", err);
                  });
              },
              "base64"
            );
          }
        }
      };

      const handleImageRemove = (public_id) => {
        console.log("remove img", public_id);
    
        axios
          .post("/api/removeimage", { public_id })
          .then((res) => {
           
    
            let filteredImages = images.filter((item) => {
              return item.public_id !== public_id;
            });
            setImages(filteredImages );
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
   <MainLayout>
    <h2>Antd upload  </h2>

    <div className="row">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {images &&
                images.map((image) => (
                  <span className="avatar-item" style={{ margin: "0 7px" }}>
                    <Badge
                      count="X"
                      key={image.public_id}
                      onClick={() => handleImageRemove(image.public_id)}
                      style={{ cursor: "pointer" }}
                    >
                      <Avatar src={image.url} size={64} shape="square" />
                    </Badge>
                  </span>
                ))}
            </div>
            </div>
    <div>
    {image}
    <label className="btn btn-primary" style={{width: '30%',marginTop: 10}}>
              Choose file 
              <input
                type="file"
                multiple
                hidden
                accept="images/*"
                onChange={FileUploadChange}
              />
            </label>
          </div>

        
   </MainLayout>
  )
}

export default AntdUploadPage