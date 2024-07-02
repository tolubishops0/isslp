import React from "react";
import Image from "next/image";
import { hero3section } from "../../lib/utils";

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
          <div className="flex items-center justify-center gap-x-6">
            {hero3section.map((item, index) => (
              <div key={index} className="w-[25%] ">
                <Image src={item.img} alt="image" className="w-full solution_img" />
                <div className="sol-detail">
                  <p className="font-bold text-[1.25rem] text-darkGray2 leading-[2.125] ">
                    {item.title}
                  </p>
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
            ))}
          </div>
        </div>
        ;
      </div>
      ;
    </div>
  );
}
