import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { IoIosNotifications } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="h-12 w-full flex justify-between px-5">
      {/* Input for large screens */}
      <div className="w-[50%] flex justify-end py-1"></div>

      {/* Input for extra-large screens */}
      <div className="w-[50%] flex justify-between py-1 gap-4">
        <div className="hidden lg:flex justify-center items-center bg-white shadow-md rounded-2xl">
          <input
            type="text"
            className="outline-none h-full pl-4 w-72 rounded-2xl text-sm"
          />
          <span className="pr-3">
            <IoIosSearch />
          </span>
        </div>
        <div className="w-full flex justify-end items-center">
          <div className="flex justify-end items-center gap-5">
            <p>Premium</p>
            <div className="relative">
              <span className="absolute left-3 top-[12px]">
                <IoMdDownload className="text-white" />
              </span>
              <Button className="rounded-full pl-9 font-light text-md">
                Get app
              </Button>
            </div>
            <IoIosNotifications className="w-7 h-7" />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
