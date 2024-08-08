"use client";

import React from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// @ts-ignore";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { subjects, carstart } from "../../lib/utils";

export default function Carousel() {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        arrows: false,
        autoStart: true,
        pagination: false,
        perPage: 7,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 3,
        },
      }}
      extensions={{ AutoScroll }}>
      {subjects.map((item, index) => (
        <SplideSlide
          key={index}
          className="flex flex-row justify-center items-center gap-x-2 max-w-[6%]">
          <Image src={carstart} alt="icons" className="w-[1.4rem]" />
          <span className="font-bold uppercase text-[1rem] text-[rgba(193,193,193,1)]">
            {item}
          </span>
        </SplideSlide>
      ))}
    </Splide>
  );
}
