import React, { useState } from 'react'
import AddEditShelterForm from '../../form/AddEditShelterForm'
import { Modal ,message } from 'antd'
import Resizer from "react-image-file-resizer";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { UpdateShelter } from '../../../redux/actions/ShelterActions';
const EditShelterModal = ({item,handleCloseEditShelterModal,showEditShelterModal}) => {

  

    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [brand, setBrand] = useState(`${item.brand}`);
    const [categories, setCategories] = useState(["Ev", "Hotel"]);
    const [category, setCategory] = useState(item.category);
    const [roomNumber, setRoomNumber] = useState(item.roomNumber);
    const [price, setPrice] = useState(item.price);
    const [stock, setStock] = useState(item.stock);
    const urlsOfItem = item.images.map((image) => image.url);
    const [images, setImages] = useState(urlsOfItem);
    const [fileList, setFileList] = useState(item.images)
    const handleSelectCategory = (value) => {
      setCategory(value);
    };
    const onChange = ({ fileList: newFileList }) => {
      setFileList(newFileList);
    };
    const onPreview = async (file) => {
      let src = file.url;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    };
    const uploadProps = {
      beforeUpload: (file) => {
        return new Promise((resolve, reject) => {
          // Resize the image
          Resizer.imageFileResizer(
            file,
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
              // Send the resized image to the server
              axios
                .post("https://afetapi.onrender.com/api/uploadimages", {
                  image: uri,
                })
                .then((response) => {
                  // Call the onFinish callback with the uploaded image URL
                  // onFinish(response.data.url);
                  setImages([...images, response.data.url]);
  
                  resolve(false); // prevent default antd upload behavior
                })
                .catch((error) => {
                  reject(error);
                });
            },
            "base64"
          );
        });
      },
      onChange: (info) => {
        const { status } = info.file;
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
  
    const handleRemoveImage = (public_id) => {
      console.log("remove img", public_id);
  
      let filteredImages = item.images.filter((item) => {
        return item.public_id !== public_id;
      });
      const urlsOfItem = filteredImages.map((image) => image.url);
      setImages(urlsOfItem);
      message.success("Successfully removed from list");
    };

    const dispatch= useDispatch()
    const handleUpdateShelterProduct = () => {
        dispatch(UpdateShelter(item._id ,{
          title,
          description,
          brand,
          category,
          price,
          stock,
          images,
          roomNumber,
        }))
        handleCloseEditShelterModal()
    
    }

  return (
    <Modal
      title="Add Shelter"
      centered
      open={showEditShelterModal}
      onOk={handleUpdateShelterProduct}
      onCancel={handleCloseEditShelterModal}
    >
      <AddEditShelterForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        categories={categories}
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
        stock={stock}
        setStock={setStock}
        roomNumber={roomNumber}
        setRoomNumber={setRoomNumber}
        handleSelectCategory={handleSelectCategory}
        handleRemoveImage={handleRemoveImage}
        images={images}
        fileList={fileList}
        uploadProps={uploadProps}
        onPreview={onPreview}
        onChange={onChange}
      />
    </Modal>
  )
}

export default EditShelterModal