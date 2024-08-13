import React from "react";
import Image from "next/image";
import { hero5section, goldstart } from "../../lib/utils";

export default function PastQuestion() {
  return (
    <>
      <div className="bg-[#EFE6D4]">
        <div className="w-[90%] xl:w-[70%] mx-auto flex flex-col gap-y-[2rem] py-[3rem] md:py-[5.5rem] ">
          <div className="text-left">
            <h1 className="font-semibold text-2xl md:text-3xl xl:text-[1.5rem] text-black xl:leading-[2.1] ">
              Explore Likely Past Questions*
            </h1>
            <h2 className="mt-3 md:mt-0 font-bold text-[0.8125rem] leading-normal xl:leading-[2.5] text-veryDarkGray">
              Succeed with study help shared by students from specific schools
              and courses
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-[1.5rem] w-full">
            {hero5section.map((item, index) => (
              <div
                key={index}
                className="past_q cursor-pointer hover:scale-95 transition-all">
                <p className="text-veryDarkBlueGray font-medium text-normal leading-normal">
                  {item.title}
                </p>
                <div className="flex items-center gap-x-4 text-darkSlateGray text-[0.609375rem] leading-normal">
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-veryDarkBrown h-[20rem] flex justify-center items-center flex-col gap-y-7">
        <div className="flex items-center gap-x-4">
          <h1 className="text-center text-white font-semibold text-2xl md:text-4xl xl:text-[3rem] leading-[1.8]">
            Get help with Intelligent Scholar AI
          </h1>
          <Image src={goldstart} alt="image" className="hidden md:flex" />
        </div>
        <div className="flex items-center justify-center ">
          <button className="w-[12.5rem] flex items-center justify-center h-[3.125rem] rounded-lg bg-white text-black font-semibold leading-[1.375] active:scale-105 hover:scale-110 transition-all">
            View More
          </button>
        </div>
      </div>
    </>
  );
}
