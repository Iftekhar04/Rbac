import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-[15%] min-h-screen shadow-lg'>
      <ul className='flex flex-col pt-5 px-5'>
        <Link to={"/"}><li className='font-semibold ps-6 py-3 text-md hover:bg-gray-100 hover:rounded-lg'>Users</li></Link>
        <Link to={"/role"}><li className='font-semibold ps-6 py-3 text-md hover:bg-gray-100 hover:rounded-lg'>Roles</li></Link>
        <Link to={"/permission"}><li className='font-semibold ps-6 py-3 text-md hover:bg-gray-100 hover:rounded-lg'>Permissions</li></Link>
        <li className='font-semibold ps-6 py-3 text-md hover:bg-gray-100 hover:rounded-lg'>Settings</li>
      </ul>
    </div>
  )
}

export default SideBar
