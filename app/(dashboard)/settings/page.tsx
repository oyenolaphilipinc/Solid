import Image from 'next/image';
import React from 'react'
import { FaRegSave } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";

const Settings = () => {
  return (
    <div className="mt-20">
      <div className="mb-16 flex flex-col md:flex-row md:justify-between">
        <div className='header'>
          <h1 className="text-2xl text-gray-900 text-center md:text-left">Your profile</h1>
          <p className="text-gray-600 text-center md:text-left">This settings allows you to customise your details</p>
        </div>
        <div className='button mx-auto md:mx-0'>
          <button className="border border-white bg-gray-900 text-white px-2 text-sm py-3 rounded-md mr-10 flex"><FaRegSave className='w-5 h-5 mr-1' />Save changes</button>
        </div>
      </div>
      <h1 className="text-xl text-gray-900 mb-4 text-center md:text-left">Personal Information</h1>
      <div className="personal flex justify-between">
        <div className="form grid mx-auto md:mx-0 mb-4 md:mb-0 grid-cols-1 lg:grid-rows-3 lg:grid-flow-col gap-3">
          <div className='01'>
            <label htmlFor='name' className="text-gray-900">First Name</label><br/>
            <input type="text" className="border border-gray-400 px-1 py-1 rounded-md outline-none" />
          </div>
          <div className='02'>
            <label htmlFor='lastname' className="text-gray-900">Last Name</label><br/>
            <input type="text" className="border border-gray-400 px-1 py-1 rounded-md outline-none"/>
          </div>
          <div className='03'>
            <label htmlFor='lastname' className="text-gray-900">Current Password</label><br/>
            <input type="text" className="border border-gray-400 px-1 py-1 rounded-md outline-none" />
          </div>
          <div className='04'>
            <label htmlFor='lastname' className="text-gray-900">Country</label><br/>
            <input type="text" className="border border-gray-400 px-1 py-1 rounded-md outline-none" />
          </div>
          <div className='05'>
            <label htmlFor='lastname' className="text-gray-900">Email Address</label><br/>
            <input type="text" className="border border-gray-400 px-1 py-1 rounded-md outline-none" />
          </div>
          <div className='06'>
            <label htmlFor='lastname' className="text-gray-900">New Password</label><br/>
            <input type="text" className="border border-gray-400 px-1 py-1 rounded-md outline-none" />
          </div>
        </div>
        <div className="hidden md:flex profile-image mr-16">
          <div className='alignee'>
            <h1 className="text-xl text-gray-900 mb-3">Profile Image</h1>
            <p className="text-sm mb-4">Image must be at least 500*500px and<br/> no larger than 5mb</p>
            <Image 
              src={'/images/user/fashion.jpg'}
              alt="Hello boys"
              width={120}
              height={120}
              className="rounded-md mb-2"
            />
            <button className="border-2 border-gray-900 px-3 py-1 bg-white rounded-md flex text-gray-900"><AiOutlineUpload className='w-5 h-5 mr-1' /> Choose file</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;