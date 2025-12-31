import React from "react";
import Image from "next/image";
import { hero5section, goldstart } from "../../lib/utils";
import "./styles.css";

export default function PastQuestion() {
  return (
    <>
      <div className="bg-inherit">
        <div className="w-[90%] max-w-[1400px] xl:w-[70%] mx-auto flex flex-col gap-y-[2rem] py-[3rem] md:py-[5.5rem] ">
          <div className="text-center">
            <h1 className="font-semibold text-lg sm:text-2xl md:text-3xl xl:text-[2rem] text-white xl:leading-[2.1] text-center">
              Explore Likely Past Questions*
            </h1>
            <p className="text-[#FFFDFD] font-light text-base md:text-lg text-center mt-4">
              Succeed with study help shared by students from specific schools
              and courses
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-[1.5rem] w-full">
            {hero5section.map((item, index) => (
              <div key={index} className="past_q">
                <p className="text-white font-medium text-normal leading-normal">
                  {item.title}
                </p>
                <div className="flex items-center gap-x-4 text-[#FFFDFD] text-sm font-extralight leading-normal">
                  <p>{item.text1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
