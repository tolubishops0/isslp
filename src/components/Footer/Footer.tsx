import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  logo,
  socialIcons,
  footerLinksProf,
  footerLinksStudets,
  footerLinksTest,
} from "../../lib/utils";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="w-[90%] mx-auto flex-col md:flex-row flex items-start md:items-center justify-between gap-y-10 md:gap-0 py-[2.5rem]">
      <div className="w-[90%] md:w-[26%] flex flex-col justify-start items-start gap-y-8">
        <Image src={logo} alt="logo" />
        <p className="text-[#FFFDFD] font-extralight text-sm pr-6">
          Discover Your Full Potential with Intelligent Scholar
        </p>
        <div>
          <div className="flex gap-x-3">
            {socialIcons.map((item) => (
              <Link
                href={item.label}
                className="hover:scale-110 transition duration-300 cursor-pointer"
                key={item.label}>
                <Image src={item.icon} alt="logo" />
              </Link>
            ))}
          </div>
          <p className="mt-3 font-extralight leading-normal font-sans text-[0.75rem] text-white">
            Copyright © Intelligent Scholar Inc. {date} All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[40%] flex flex-wrap justify-between items-start gap-y-6">
        <div className="flex flex-col gap-y-[0.65rem] ">
          <p className="font-bold text-sm md:text-[1rem] text-white">
            Students
          </p>
          {footerLinksStudets.map((item) => (
            <Link
              href={item.href}
              className="text-sm font-extralight text-[#D8D3FF] hover:text-[#f7f7fa] transition duration-300"
              key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-[0.65rem]">
          <p className="font-bold text-sm md:text-[1rem] text-white">
            Professional
          </p>
          {footerLinksProf.map((item) => (
            <Link
              href={item.href}
              className="text-sm font-extralight text-[#D8D3FF] hover:text-[#f7f7fa] transition duration-300"
              key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-y-[0.65rem]">
          <p className="font-bold text-sm md:text-[1rem] text-white">
            Test Takers
          </p>
          {footerLinksTest.map((item) => (
            <Link
              href={item.href}
              className="text-sm font-extralight text-[#D8D3FF] hover:text-[#f7f7fa] transition duration-300"
              key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
