import React from "react";
import Image from "next/image";
export const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex space-x-4 rounded-xl transition duration-200 ease-out transform items-center m-2 mt-5 cursor-pointer hover:bg-gray-100 hover:scale-105">
      <div className="w-16 h-16 relative">
        <Image src={img} alt="" layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};
