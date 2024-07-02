import React from "react";
import Image from "next/image";
import { logo, socialIcon } from "../../../lib/utils";

export default function Footer() {
  return (
    <div className="bg-white h-[15rem] md:h-[10rem]">
      <div className="w-[90%] mx-auto h-[10rem] flex-col md:flex-row flex items-start md:items-center justify-between gap-y-10 md:gap-0 py-4 md:py-0">
        <Image src={logo} alt="logo" className="w-[4.625rem] md:w-[3.5rem]" />
        <div className="flex flex-col justify-between items-start md:items-center gap-y-2 md:gap-y-8">
          <div className="flex gap-x-4">
            <p className="cursor-pointer font-bold text-normal leading-normal text-primary">
              Study Tools
            </p>
            <p className="cursor-pointer font-bold text-normal leading-normal text-primary">
              Contact
            </p>
          </div>
          <div className="hidden md:flex">
            <p className="font-normal leading-normal font-sans text-[0.75rem] text-black">
              © Intelligent Scholar All Rights Reserved
            </p>
          </div>
        </div>
        <div className="flex gap-x-3">
          {socialIcon.map((item, index) => (
            <Image
             
              key={index}
              src={item}
              alt="logo"
              className="hover:scale-110 transition-all cursor-pointer"
            />
          ))}
        </div>

        <div className="border-t-2 border-verydarkGray md:hidden flex items-center justify-center w-full">
          <p className="text-center font-normal leading-normal font-sans text-[0.75rem] text-black pt-2">
            © Intelligent Scholar All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
