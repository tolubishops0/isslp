import React from "react";
import Image from "next/image";
import { hero3section } from "../../../lib/utils";
import Button from "./Button";
import {
  greenstar,
  smilignpe,
  hero4sectionPropss,
  sevenpad,
} from "../../../lib/utils";

export default function Solutions() {
  return (
    <div>
      <div className="bg-[rgba(250,254,253,1)]">
        <div className="w-[90%] py-[3rem] mx-auto flex flex-col gap-y-[3rem]">
          <div className="text-center">
            <h1 className="font-semibold text-2xl xl:text-[1.75rem] text-veryDarkBrown xl:leading-[2.1] text-center">
              Get your textbooks solutions
            </h1>
            <h2 className="font-bold text-normal leading-[2.5] text-coolGray">
              Explore Detailed Coursework Explanations
            </h2>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-y-[4rem] gap-x-10">
            {hero3section.map((item, index) => (
              <div key={index} className="w-[100%] xl:w-[25%] ">
                <Image
                  src={item.img}
                  alt="image"
                  className="w-full solution_img"
                />
                <div className="sol-detail">
                  <p className="font-bold text-[1.25rem] text-darkGray2 leading-[] ">
                    {item.title}
                  </p>
                  <div className="flex flex-col gap-y-[0.6rem] mt-3">
                    {" "}
                    <p className="font-normal text-normal text-darkGray leading-[1rem]">
                      {item.text1}
                    </p>
                    <p className="font-normal text-normal text-darkGray leading-[1rem]">
                      {item.text2}
                    </p>
                    <p className="font-normal text-normal text-darkGray leading-[1rem]">
                      {item.text3}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center ">
            <button className="w-[12.5rem] flex items-center justify-center h-[3.125rem] rounded-lg bg-black text-white font-semibold leading-[1.375] active:scale-105 hover:bg-slate-900">
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-[70%] mx-auto">
        <div className="unlock_intelligence relative">
          <div className="pl-[2rem] mt-[4rem] flex flex-col gap-y-[3rem]">
            {" "}
            <h1 className="text-white text-[3rem] font-semibold">
              Unlock Your Potential with Intelligent Scholar
            </h1>
            <div className="flex items-start justify-start">
              {hero4sectionPropss.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between text-white w-[20%] ">
                  <Image src={item.icon} alt="image" className="" />
                  <p className="text-center font-semibold text-[0.875rem] leading-[1.1875] mt-3">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              <button className="w-[13.75rem] flex items-center justify-center h-[2.5rem] rounded-lg bg-black text-white font-semibold leading-[1.375] active:scale-105 hover:bg-slate-900">
                View all Courses
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 right-[-2px]">
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
