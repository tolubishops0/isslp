"use client";

import React, { useEffect, useRef } from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// @ts-ignore";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { subjects } from "../../../lib/utils";

export default function Carousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    const carousel = () => {
      if (!scroller) return;

      const innerScroller = scroller.querySelector(".carousel_scroller");

      if (!innerScroller) return;

      if (innerScroller.getAttribute("data-cloned") === "true") return;

      const innerScrollerChildren = Array.from(innerScroller.children);

      innerScrollerChildren.forEach((item) => {
        const scrollItem = item.cloneNode(true) as HTMLElement;

        innerScroller.appendChild(scrollItem);
      });

      innerScroller.setAttribute("data-cloned", "true");
    };
    carousel();
  }, []);

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
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
            maxWidth: "10rem",
          }}>
          <Image src={item.icon} alt="icons" />
          <span className="font-bold capitalize text-[1.125rem] text-veryLightCyan leading-[1.75]">
            {item.label}
          </span>
        </SplideSlide>
      ))}
    </Splide>
  );
}
