import React from "react";
import { hero5section } from "../../../lib/utils";

export default function PastQuestion() {
  return (
    <div className="bg-[#EFE6D4] mt-[4rem]">
      <div className="w-[70%] mx-auto">
        <div className="text-left">
          <h1 className="font-semibold text-2xl xl:text-[1.5rem] text-black xl:leading-[2.1] ">
            Explore Likely Past Questions*
          </h1>
          <h2 className="font-bold text-[0.8125rem] leading-[2.5] text-veryDarkGray">
            Succeed with study help shared by students from specific schools and
            courses
          </h2>
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-[1rem]">
          {hero5section.map((item, index) => (
            <div key={index} className="past_q">
              <p>{item.title}</p>
              <div>
                {" "}
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
