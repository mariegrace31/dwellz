"use client"
import React, { useState }  from 'react';
import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch';
import { Button } from '@/components/ui/button';
import { supabase } from '@/utils/supabase/client';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';
import { FiLoader } from "react-icons/fi";

function AddNewListing() {
  const [selectedAddress,setSelectedAddress]=useState();
  const [coordinates,setCoordinates]=useState();
  const {user} = useUser();
  const [loader, setLoader]= useState(false);
  
  const nextHandler=async()=> {

    setLoader(true)

  const { data, error } = await supabase
  .from('listing')
  .insert([
    { address: selectedAddress.label,
      coordinates: coordinates,
      createdBy:user?.primaryEmailAddress.emailAddress
    },
  ])
.select();
 
if (data)
  {
    setLoader(false)
    console.log("New Data Added,", data);
    toast("New Address Added")
  }

  if(error)
    {
      setLoader(false)
      console.log("Error");
      toast("Server Side Error")
    }
        
  }
  return (
    <div className='mt-10 md:mx-56 lg:mx-80'>
      <div className='p-4 flex flex-col gap-3 items-center justify-center'>
        <h2 className='font-bold text-2xl'>Add New Listing</h2>
        <div className='p-5 w-full rounded-lg border shadow-md flex flex-col gap-4 justify-center items-center'>
          <h2 className='text-gray-500'>Enter the address you want to list</h2>
          <GoogleAddressSearch 
            selectedAddress={(value)=>setSelectedAddress(value)}
            setCoordinates={(value)=>setCoordinates(value)}
          />
          <Button
           disabled={!selectedAddress || !coordinates || loader}
           onClick={nextHandler}
          >
            {loader? <FiLoader className='animate-spin' /> : 'Next'} </Button>
        </div>
      </div>
    </div>
  )
}

export default AddNewListing;
