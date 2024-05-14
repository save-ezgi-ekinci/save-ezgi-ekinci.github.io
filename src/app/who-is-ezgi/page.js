import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div className='p-4'>
      <Link className='bg-[#A1A1B1] text-center text-white rounded-md p-4' href={"/"}>Back to HOMEPAGE</Link>
      <img className='w-1/3 m-auto' src='/img/ezgi.jpg'></img>
    </div>
  )
}

export default index