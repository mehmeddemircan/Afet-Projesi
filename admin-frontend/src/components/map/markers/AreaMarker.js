import { useDispatch } from "react-redux";
import { DeleteArea, GetSingleArea } from "../../../redux/actions/AreaActions";
import { Button, Popover } from "antd";
import ReqProductMapTag from "../../tag/ReqProductMapTag";
import ReqPersonMapTag from "../../tag/ReqPersonMapTag";
import AddReqProductDrawer from "../../drawer/AddReqProductDrawer";
import { useState } from "react";
import AddReqPersonDrawer from "../../drawer/AddReqPersonDrawer";

const AreaMarker = ({ area, text }) => {
  const dispatch = useDispatch();

  const handleDeleteArea = (id) => {



    if (window.confirm(`${area.name} silmek istedğinizden emin misiniz ? `)) {
      dispatch(DeleteArea(id));
    }
  };

  const [showAddReqProductDrawer, setShowAddReqProductDrawer] = useState(false);
  const [areaId, setAreaId] = useState("");
  const handleShowAddReqProductDrawer = () => {
    setAreaId(area._id);
    dispatch(GetSingleArea(area._id));

    setShowAddReqProductDrawer(true);
  };

  const handleCloseAddReqProductDrawer = () => {
    setShowAddReqProductDrawer(false);
  };

  const [showAddReqPersonDrawer, setShowAddReqPersonDrawer] = useState(false)

  const handleShowAddReqPersonDrawer = () => {
    setAreaId(area._id);
    dispatch(GetSingleArea(area._id));
    setShowAddReqPersonDrawer(true)
  }
  const handleCloseAddReqPersonDrawer = () => {
    setShowAddReqPersonDrawer(false);
  };


  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handlePopoverVisibleChange = (visible) => {
    setIsPopoverVisible(visible);
  };
  // popover segment
  const handleDrawerVisibleChange = (visible) => {
    if (visible) {
      setIsPopoverVisible(false);
    }
  };
  return (
    <Popover
  
    open={isPopoverVisible}
    onOpenChange={handlePopoverVisibleChange}
      content={
        <div>
          <div className="d-flex justify-content-start">
            <p className="me-2">
              latitude {area.coordinates.latitude.toFixed(6)} |
            </p>
            <p>longitude {area.coordinates.longitude.toFixed(6)}</p>
          </div>
          <p
            style={{
              maxWidth: "260px",
            }}
            className="d-flex flex-wrap justify-content-start"
          >
            <span className="mt-1">gerekli ürünler : </span>
            {area.requrired_products.length == 0 ? (
              <span className="ms-1 mt-1">ihtiyac yok</span>
            ) : (
              area.requrired_products.map((product) => (
                <ReqProductMapTag key={product._id} product={product} />
              ))
            )}
        
          </p>
          <hr />
          <p
            style={{
              maxWidth: "260px",
            }}
            className="d-flex flex-wrap justify-content-start flex-1"
          >
            <span className="mt-1">gerekli insanlar : </span>
            {area.requrired_people.length == 0 ? (
              <span className="ms-1 mt-1">ihtiyac yok</span>
            ) : 
              area.requrired_people.map((person) => (
                <ReqPersonMapTag person={person} key={person._id} />
              ))
            }
          </p>
          <hr />
          <div className=" d-flex flex-row flex-1 justify-content-end">
            <button
              className="btn btn-sm rounded-pill btn-outline-primary mx-2"
              onClick={handleShowAddReqProductDrawer}
            >
              Add Product
            </button>
            <AddReqProductDrawer
              areaId={areaId}
              handleDrawerVisibleChange={handleDrawerVisibleChange}
              showAddReqProductDrawer={showAddReqProductDrawer}
              handleCloseAddReqProductDrawer={handleCloseAddReqProductDrawer}
            />
            <button className="btn btn-sm rounded-pill btn-outline-primary" onClick={handleShowAddReqPersonDrawer}>
              Add Person
            </button>
            <AddReqPersonDrawer 
              areaId={areaId}
              handleDrawerVisibleChange={handleDrawerVisibleChange}
              showAddReqPersonDrawer={showAddReqPersonDrawer}
              handleCloseAddReqPersonDrawer={handleCloseAddReqPersonDrawer}
            />

          </div>
        </div>
      }
      title={
        <div className="d-flex justify-content-between">
          <a>{text}</a>
          <i
            class="fa-solid fa-x"
            onClick={() => handleDeleteArea(area._id)}
          ></i>
        </div>
      }
    >
      <Button type="default" icon={<i class="fa-solid fa-hand"></i>}></Button>
    </Popover>
  );
};
export default AreaMarker;
