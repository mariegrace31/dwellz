"use client"
import React from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { FaMapMarkerAlt } from "react-icons/fa";

function GoogleAddressSearch({selectedAddress, setCoordinates}) {
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
            selectedAddress(place);
            console.log(place);
            geocodeByAddress(place.label)
            .then(result=>getLatLng(result[0]))
            .then(({lat,lng})=>{
              setCoordinates({lat:lng})
            })
          }
        }}
      />
    </div>
  )
}

export default GoogleAddressSearch;
