import React from "react";
import Image, { StaticImageData } from "next/image";
import { hero2Section } from "../../lib/utils";
import "./styles.css";

export default function Potential() {
  const iconPositon = (index: number, icon: StaticImageData) => {
    let positionStyles: React.CSSProperties;

    switch (index) {
      case 0:
        positionStyles = { top: "-5%", left: "-8%", width: "4rem" };
        break;
      case 1:
        positionStyles = { bottom: "2%", right: "12%", width: "2rem" };
        break;
      case 2:
        positionStyles = { top: "4%", left: "7%", width: "2.5rem" };
        break;
      case 5:
        positionStyles = { bottom: "-1%", right: "20%", width: "2.5rem" };
        break;
      case 6:
        positionStyles = { bottom: "0%", right: "5%", width: "3.4rem" };
        break;
      default:
        positionStyles = { top: "0", left: "0" };
        break;
    }

    return (
      <Image
        src={icon}
        alt="image"
        style={{ ...positionStyles, position: "absolute" }}
      />
    );
  };

  return (
    <div className="bg-inherit">
      <div className="w-[90%] py-[1rem] md:py-[3rem] mx-auto flex flex-col gap-y-[3rem]">
        <div className="w-full md:w-[65%] mx-auto">
          <h1 className="font-semibold text-lg sm:text-2xl md:text-3xl xl:text-[2rem] text-white xl:leading-[2.1] text-center">
            Unlock Your Potential with Intelligent Scholar
          </h1>
          <p className="text-[#FFFDFD] font-light text-base md:text-lg text-center mt-4">
            From research to exams, we&apos;ve got you covered. Our
            comprehensive services are designed to assist students at every
            stage of their academic journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-[4rem]">
          {hero2Section.map((item, index) => (
            <div key={index} className="card-border ">
              <Image src={item.icon} alt="item.icon" />
              <p className="text-white text-left text-[1.1rem] 2xl:text-[1.285rem] font-semibold mt-3">
                {item.title}
              </p>
              <p className=" text-[#FFFDFD] text-sm 2xl:text-base font-extralight leading-[2rem] 2xl:leading-[2.2rem] mt-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
