import React from "react";
import Image from "next/image";
import { stressedguy, play } from "../../lib/utils";

export default function VideoSection() {
  return (
    <div className="bg-[#FAFEFD] py-[3.5rem]">
      <div className="w-[90%] mx-auto ">
        <h1 className="font-semibold text-2xl md:text-3xl xl:text-[2rem] text-veryDarkBrown xl:leading-[2.1] text-center">
          Elevate your learning journey with Intelligent Scholar!
        </h1>

        <div className="relative mt-[2rem]">
          <Image
            src={stressedguy}
            alt="stressed-guy"
            className="md:h-[30rem] 2xl:h-[47rem] w-full"
          />
          <Image
            src={play}
            alt="play-icon"
            className="w-[3rem] md:w-[7.5rem] cursor-pointer absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
