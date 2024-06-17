"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useUser, UserButton } from '@clerk/nextjs'
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

function Header() {

  const path = usePathname();
  const {user,isSignedIn}=useUser();

  useEffect(() =>{

  },[])

  
  return (
<header className="bg-white shadow-sm fixed w-full z-10">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex gap-2 items-center">
        <Image src={'/logo.svg'} width={150} height={150} alt='logo' className='w-7 h-7' />
        <p className='text-xl md:text-2xl font-bold'>DWELLZ</p>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
          <Link href={'/'}>
              <li className={`'font-medium cursor-pointer transition hover:text-primary'
                  ${path=='/'&& 'text-primary'}`}> For Sale
              </li>
          </Link>
            <li className="font-medium cursor-pointer transition hover:text-primary"> For Rent</li>
            <li className="font-medium cursor-pointer transition hover:text-primary" > Agent Finder</li>
          </ul>
        </nav>

      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <Button><FaPlus className='px-1 w-5 h-5' />Post Your Ad</Button>
          {isSignedIn ?
          <UserButton />
          :
          <Link href={'/sign-in'}>
            <div className="hidden sm:flex">
              <Button variant="outline">Sign In</Button>
            </div>
          </Link>
        }

        </div>
        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header;  
