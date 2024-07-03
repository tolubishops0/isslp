import React from "react";
import Image from "next/image";
import {
  greenstar,
  smilignpe,
  hero4sectionPropss,
  sevenpad,
} from "../../../lib/utils";

export default function Solutions() {
  return (
    <div className="bg-white">
      <div className=" w-[90%] md:w-[70%] mx-auto py-[3rem] md:py-[4rem]">
        <div className="unlock_intelligence relative">
          <div className="pl-[2rem] z-50 mt-[4rem] flex flex-col gap-y-[2rem] md:gap-y-[3rem]">
            <h1 className="text-white text-xl md:text-3xl  text-[3rem] font-semibold">
              Unlock Your Potential with Intelligent Scholar
            </h1>
            <div className="z-50 flex items-start justify-start">
              {hero4sectionPropss.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between text-white w-[28%] md:w-[20%] ">
                  <Image src={item.icon} alt="image" className="" />
                  <p className="text-center font-semibold text-[0.875rem] leading-[1.1875] mt-3">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <button className="z-50 cursor-pointer w-[13.75rem] flex items-center justify-center h-[2.5rem] rounded-lg bg-black text-white font-semibold leading-[1.375] active:scale-105 hover:scale-95 transition-all">
              View all Courses
            </button>
          </div>

          <div className="absolute bottom-0 r-0 md:right-[-2px]">
            <Image src={smilignpe} alt="image" className="" />
          </div>
          <Image
            src={greenstar}
            alt="image"
            className="absolute top-[-8%] left-[-2%]"
          />
          <Image
            src={sevenpad}
            alt="image"
            className="absolute top-[-9%] right-[-4%]"
          />
        </div>
      </div>
    </div>
  );
}
