
import { List, Popover } from 'antd';
import React, { Fragment } from 'react'
import PlacesAutocomplete, {
} from "react-places-autocomplete";
const SearchMapButton = ({address,handleSelect,setAddress}) => {
  return (
    <Fragment>
        <Popover
       
      overlayClassName='col-md-6 col-sm-4 col-lg-4'
       placement="bottomRight"
       content={
         <div>
           <PlacesAutocomplete
             value={address}
             onChange={setAddress}
             onSelect={handleSelect}
           >
             {({
               getInputProps,
               suggestions,
               getSuggestionItemProps,
               loading,
             }) => (
               <div >
                 <input
                   className="form-control w-100 mb-3"
                   {...getInputProps({ placeholder: "Search places..." })}
                 />
                 <List >
                   {loading && <div>Loading...</div>}
                   {suggestions.map((suggestion) => {
                     const style = {
                       backgroundColor: suggestion.active ? "#e6e6e6" : "#fff",
                     };
                     return (
                       <List.Item
                         {...getSuggestionItemProps(suggestion, { style })}
                       >
                         {suggestion.description}
                       </List.Item>
                     );
                   })}
                 </List>
               </div>
             )}
           </PlacesAutocomplete>
         </div>
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