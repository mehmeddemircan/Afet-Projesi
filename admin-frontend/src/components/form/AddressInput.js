import { Input, List, Popover } from 'antd';
import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';

const AddressInput = ({address,setAddress,handleSelect}) => {
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
        <div>
          <Popover
            trigger={"click"}
            placement="bottom"
            title="hello"
            content={
              <List>
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active
                      ? "#e6e6e6"
                      : "#fff",
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
            }
          >
            <Input
            allowClear={true}
              {...getInputProps({ placeholder: "Search places..." })}
            />
          </Popover>
        </div>
      )}
    </PlacesAutocomplete>
  </div>
  )
}

export default AddressInput