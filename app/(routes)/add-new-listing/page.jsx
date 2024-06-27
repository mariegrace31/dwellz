import React from 'react';
import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch';

function AddNewListing() {
  return (
    <div className='p-10 flex flex-col gap-5 items-center justify-center'>
      <h2 className='font-bold text-2xl'>Add New Listing</h2>
      <div>
        <h2 className='text-gray-500'>Enter the address you want to list</h2>
        <GoogleAddressSearch />
      </div>
    </div>
  )
}

export default AddNewListing;
