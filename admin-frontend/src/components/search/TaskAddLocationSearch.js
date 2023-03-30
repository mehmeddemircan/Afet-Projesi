import { List, Popover } from 'antd';
import React, { Fragment } from 'react'
import PlacesAutocomplete, {
} from "react-places-autocomplete";
const TaskAddLocationSearch = ({address,setAddress,handleSelect}) => {
  return (
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
                    <Fragment>
                       
   <label className='form-label'>
                     Location
                </label>
                 <input
                   className="form-control w-100 mb-3"
                   {...getInputProps({ placeholder: "Search places..." })}
                 />
                  <div style={{
                            maxHeight : '200px',
                            overflowY : 'auto'
                        }}>
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
                    </Fragment>
             
                
                   
               
          
             )}
           </PlacesAutocomplete>
         </div>
  )
}

export default TaskAddLocationSearch