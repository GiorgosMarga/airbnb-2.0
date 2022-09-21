import React from "react";
import Image from "next/image";

import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
const InfoCard = ({ img, location, title, descr, star, price, total }) => {
  return (
    <div className="flex px-2 border-b cursor-pointer hover:opacity-90 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 hover:scale-105 transition transform duration-200 ease-out">
        <Image
          src={img}
          alt=""
          layout="fill"
          className=" rounded-xl"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5 py-3">
        <div className="flex justify-between items-center">
          <p className="">{location}</p>
          <HeartIcon className="cursor-pointer h-7" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{descr}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
