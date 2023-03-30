import React, { Fragment } from 'react'
import GoogleMapReact from "google-map-react";
import { Button, Popover } from 'antd';
const MarkerComponent = ({ task }) => {
//   const dispatch = useDispatch();

//   const handleDeleteArea = (id) => {
//     dispatch(DeleteArea(id));
//   };

  return (
    // <Popover
    //   content={
    //     <div>
    //       <div className="d-flex justify-content-start">
    //         <p className="me-2">latitude {area.coordinates.latitude} |</p>
    //         <p>longitude {area.coordinates.longitude}</p>
    //       </div>
    //       <p
    //         style={{
    //           maxWidth: "260px",
    //         }}
    //       >
    //         gerekli ürünler{" "}
    //         {area.requrired_products.length == 0 ? (
    //           "ihtiyac yok"
    //         ) : (
    //           <div className="d-flex flex-wrap justify-content-start">
    //             {area.requrired_products.map((product) => (
    //               <ReqProductMapTag key={product._id} product={product} />
    //             ))}
    //           </div>
    //         )}{" "}
    //       </p>

    //       <p>
    //         gerekli insanlar :{" "}
    //         {area.requrired_products.length == 0 ? (
    //           "ihtiyac yok"
    //         ) : (
    //           <div className="d-flex flex-wrap justify-content-start">
    //             {area.requrired_people.map((person) => (
    //               <ReqPersonMapTag person={person} key={person._id} />
    //             ))}
    //           </div>
    //         )}
    //       </p>
    //     </div>
    //   }
    //   title={
    //     <div className="d-flex justify-content-between">
    //       <a>{text}</a>
    //       <i
    //         class="fa-solid fa-x"
    //         onClick={() => handleDeleteArea(area._id)}
    //       ></i>
    //     </div>
    //   }
    // >
        // {/* </Popover> */}
        <Popover 
        overlayStyle={{
            maxWidth : '300px'
        }}
        trigger={'hover'}
            title = {
                <h6>{task.text}</h6>
            }
        >
    <Button type="default" icon={<i class="fa-solid fa-check"></i>} />
        </Popover>
  

  );
};


const TaskMapDiv = ({task}) => {
    const defaultProps = {
        center: {
          lat: task.location ?  parseFloat( `${task.location.lat}`) : 35.5,
          lng: task.location ?  parseFloat(` ${task.location.lng}`)  : 35.5,
        },
        zoom: task.location ? 11 : 4,
      };
    
  return (
   <Fragment>
     <div className="container-fluid" style={{ height: "200px" }}>
     <GoogleMapReact
          center={defaultProps.center}
          zoom={defaultProps.zoom}
  
        >
 <MarkerComponent
            
                lat={task.location?.lat}
                lng={task.location?.lng}
                task={task}
                text={
                  <>
                  <a>görevv</a>
                    {/* <a>{area.name} Depremi</a> */}
                  </>
                }
              />
            

        </GoogleMapReact>
        </div>
   </Fragment>
  )
}

export default TaskMapDiv