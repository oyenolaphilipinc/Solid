// components/Card.js

import Image from 'next/image';
import Link from 'next/link';
import {IoEye} from 'react-icons/io5'

interface CardDetailsProps{
  image: string,
  title: string,
  details: string,
  alt: string,
  href: string,
  className?: any,
}

const Card = ({ image, title, details, alt, href, className }: CardDetailsProps) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-white ${className}`}>
      <Image className="w-full" src={image} alt={alt} width={400} height={250} />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-900 text-xl mb-2">{title}</div>
        <p className="text-gray-900 text-base">{details}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between gap-2 md:gap-0">
        <Link href={href} className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-full flex items-center transition-all duration-300 ease-in-out shadow-md transform hover:scale-105">
           <IoEye className="h-6 w-6 mr-2"/> Preview
        </Link>
        <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out shadow-md transform hover:scale-105">
          Download
        </button>
      </div>
    </div>
  );
};

export default Card;
