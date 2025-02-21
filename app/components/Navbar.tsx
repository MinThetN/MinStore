import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-gray-100 border-b'>
        <div className='container border font-bold text-3xl text-gray-800 w-full h-full
                        items-center flex justify-between'>
            <h1 className='cursor-pointer font-mono text-gray-700'>MTNstore</h1>
            <div className='relative text-4xl'>
                <HiOutlineShoppingBag />
                <span className='cart-item '> 0
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar