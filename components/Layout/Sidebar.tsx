"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Sidebar = () => {
    const [currentTab, setCurrentTab] = useState("One")
  return (
        <div className='hidden lg:block fixed w-20 h-screen p-4 bg-grey-900 border-r-[1px] flex-col justify-between'>
            <div className='flex flex-col items-center'>
                <Link href='/dashboard'>
                    <div
                    className={`p-3 rounded-lg inline-block ${
                    currentTab === "One" ? "bg-purple-800 text-white" : "hover:bg-gray-200 bg-gray-100"
                }`}
                    onClick={() => setCurrentTab("One")}
                    >
                        <RxSketchLogo size={20}/>
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'> </span>
                <Link href='/free-templates'>
                    <div className={`cursor-pointer my-4 p-3 rounded-lg inline-block ${
                        currentTab === "Four" ? "bg-purple-800 text-white": "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setCurrentTab("Four")}>
                        <RxDashboard size={20}/>
                    </div>
                </Link>
                <Link href='/customers'>
                    <div className={`cursor-pointer my-4 p-3 rounded-lg inline-block ${
                        currentTab === "Five" ? "bg-purple-800 text-white": "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setCurrentTab("Five")}>
                        <RxPerson size={20}/>
                    </div>
                </Link>
                <Link href='/templates'>
                    <div className={`cursor-pointer my-4 p-3 rounded-lg inline-block ${
                        currentTab === "Three" ? "bg-purple-800 text-white": "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setCurrentTab("Three")}>
                        <HiOutlineShoppingBag size={20}/>
                    </div>
                </Link>
                <Link href='/settings'>
                    <div 
                    className={`cursor-pointer my-4 p-3 rounded-lg inline-block ${
                        currentTab === "Two" ? "bg-purple-800 text-white": "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={() => setCurrentTab("Two")}
                    >
                        <FiSettings size={20}/>
                    </div>
                </Link>
            </div>
        </div>
  )
}

export default Sidebar