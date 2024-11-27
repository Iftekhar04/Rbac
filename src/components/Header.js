import React from 'react';
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  return (
    <div className='flex justify-between px-4 py-3 shadow-lg'>
      <span className='font-bold text-lg'>Admin Dashboard</span>
      <div className='flex gap-1 items-center'>
        <p className='font-semibold text-md'>User Profile</p>
        <TiArrowSortedDown className='size-5 mt-1'/>
      </div>
    </div>
  )
}

export default Header
