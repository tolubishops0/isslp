import React from "react";
import Image from "next/image";
import { screbottom, andriodbut, screwtop, pinkk } from "../../lib/utils";
import "./styles.css";

export default function Solutions() {
  return (
    <div className="pt-[3rem] pb-[5rem] relative">
      <div className="solution-container  w-[90%] md:w-[65%] mx-auto">
        <div className="relative w-[90%] md:w-[75%] mx-auto flex flex-col gap-y-[1.5rem]">
          <h1 className="font-semibold text-lg sm:text-2xl md:text-3xl xl:text-[2rem] text-white xl:leading-[2.1] text-center">
            Get help with Intelligent Scholar AI
          </h1>
          <p className="text-[#FFFDFD] font-extralight text-sm text-center">
            Don't struggle alone. Intelligent Scholar AI is here to assist you.
            Experience the power of AI-driven learning. Try it now and see the
            difference.
          </p>
          <button className="rounded-[10rem] mx-auto w-[17rem] md:w-[22rem] h-[3.5rem] flex items-center justify-center gap-x-2 bg-black">
            <Image src={andriodbut} alt="andriodbut" className="w-[1.5rem]" />
            <span className="text-sm md:text-[1.25rem] text-white font-semibold leading-[1.375]">
              Chat with the smartest bot
            </span>
          </button>
          <Image
            src={screbottom}
            alt="andriodbut"
            className="hidden md:block w-[7rem] absolute bottom-[-62%] left-[-18%]"
          />
          <Image
            src={screwtop}
            alt="andriodbut"
            className="hidden md:block w-[7rem] absolute top-[-62%] right-[-18%]"
          />
        </div>
      </div>
      <Image
        src={pinkk}
        alt="andriodbut"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}
