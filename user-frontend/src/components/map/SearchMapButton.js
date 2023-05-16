
import { List, Popover } from 'antd';
import React, { Fragment } from 'react'
import PlacesAutocomplete, {
} from "react-places-autocomplete";
import SearchMapContent from './SearchMapContent';
const SearchMapButton = ({address,handleSelect,setAddress}) => {
  return (
    <Fragment>
        <Popover
       
      overlayClassName='col-md-6 col-sm-4 col-lg-4'
       placement="bottomRight"
       content={
         <SearchMapContent address={address} setAddress={setAddress} handleSelect={handleSelect} />
       }
       title={
         <a style={{ color: "rgb(255,56,92)", fontSize: "15px" }}>
           Search Your Address
         </a>
       }
       trigger="click"
     >
       <button
         style={{ backgroundColor: "rgb(255,56,92)" }}
         className="btn rounded-pill mx-2"
       >
         <i class="fa-solid fa-magnifying-glass text-white"></i>
       </button>
     </Popover>
    </Fragment>
  )
}

export default SearchMapButton