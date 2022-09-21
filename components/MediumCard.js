import React from "react";
import Image from "next/image";
export const MediumCard = ({ img, title }) => {
  return (
    <div className="hover:scale-105 transition transform duration-300 easy-out cursor-pointer">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <div>
        <h2 className="text-2xl mt-3">{title}</h2>
      </div>
    </div>
  );
};
