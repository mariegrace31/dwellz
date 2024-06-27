import React from 'react';
import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch';
import { Button } from '@/components/ui/button';

function AddNewListing() {
  return (
    <div className='mt-10 md:mx-56 lg:mx-80'>
      <div className='p-4 flex flex-col gap-3 items-center justify-center'>
        <h2 className='font-bold text-2xl'>Add New Listing</h2>
        <div className='p-5 w-full rounded-lg border shadow-md flex flex-col gap-4 justify-center items-center'>
          <h2 className='text-gray-500'>Enter the address you want to list</h2>
          <GoogleAddressSearch />
          <Button>Next</Button>
        </div>
      </div>
    </div>
  )
}

export default AddNewListing;
