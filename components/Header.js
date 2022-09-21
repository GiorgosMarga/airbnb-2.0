import React from "react";
import Image from "next/image";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

import {
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="outline-none pl-5 bg-transparent flex-grow text-gray-600 text-sm placeholder-gray-400"
        />
        <MagnifyingGlassCircleIcon className="w-8 h-8 rounded-full text-red-400 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center  justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 w-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;