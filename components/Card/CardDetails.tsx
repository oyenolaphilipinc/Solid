import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from "react-icons/fa";
import { IoDownload } from "react-icons/io5";

interface CardDetailsProps{
    image: string,
    title: string,
    details: string,
    alt: string,
    href: string
}

const CardDetails = ({ image, title, details, alt, href}: CardDetailsProps) => {
  return (
    <Link className="xl:border px-6 pb-3 w-96 rounded-md" href={href}>
        <Image 
            src={image}
            alt={alt}
            width={400}
            height={400}
            className="pt-2 pb-2"
        />
        <div className="px-4">
        <h1 className="text-2xl font-bold text-gray-800 inline-block">{title}</h1>
        <p className="mb-2 text-gray-600">{details}</p>
        <div className="flex justify-between mt-1">
            <button className="text-md flex font-bold gap-2 pt-1 border border-white xl:px-4 px-2 py-1 rounded-md bg-slate-900 text-white"><FaEye className="h-6 w-6 "/>Preview</button>
            <button className="text-md text-white flex font-bold gap-2 pt-1 border border-white xl:px-4 py-1 px-2 rounded-md bg-indigo-700 ml-6"><IoDownload className="h-6 w-6 "/>Download</button>
        </div>
        </div>
    </Link>
  )
}

export default CardDetails