"use client"
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { FaMapMarkerAlt } from "react-icons/fa";

function GoogleAddressSearch() {
  return (
    <div className='flex gap-1 items-center w-full pt-3'>
      <FaMapMarkerAlt className='h-10 w-12 text-primary rounded-lg bg-green-200 p-2' />
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        selectProps={{
          placeholder:'Search Property Address',
          isClearable:true,
          className:'w-full',
          onChange:(place)=>{
            console.log(place);
          }
        }}
      />
    </div>
  )
}

export default GoogleAddressSearch;
