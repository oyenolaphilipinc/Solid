// components/Card.js

import Image from 'next/image';
import Link from 'next/link';
import {IoEye} from 'react-icons/io5'

const Card = ({ image, title, details, alt, href }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image className="w-full" src={image} alt={alt} width={400} height={250} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{details}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <Link href={href} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex">
           <IoEye className="h-6 w-6 mr-2"/> Preview
        </Link>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Download
        </button>
      </div>
    </div>
  );
};

export default Card;
