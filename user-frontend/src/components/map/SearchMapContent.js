import { List } from 'antd';
import React from 'react'
import PlacesAutocomplete, {
} from "react-places-autocomplete";
const SearchMapContent = ({address,handleSelect,setAddress}) => {
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
               <div >
                 <input
                   className="form-control w-100 mb-3"
                   {...getInputProps({ placeholder: "Search places..." })}
                 />
                 <List>
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
  )
}

export default SearchMapContent