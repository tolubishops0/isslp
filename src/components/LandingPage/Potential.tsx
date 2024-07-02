import React from "react";
import Image, { StaticImageData } from "next/image";
import { hero2Section } from "../../../lib/utils";

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
    <div className="bg-[rgba(255,227,245,0.7)]">
      <div className="w-[90%] py-[3rem] mx-auto flex flex-col gap-y-[3rem]">
        <h1 className="font-semibold text-2xl xl:text-[2rem] text-veryDarkBrown xl:leading-[2.1] text-center">
          Unlock Your Potential with Intelligent Scholar
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-[4rem]">
          {hero2Section.map((item, index) => (
            <div key={index} className="card-border relative ">
              <div className=" flex flex-col items-start justify-center text-black gap-y-2 px-3 ">
                <Image src={item.img} alt="image" className="w-full" />
                <p className="text-left text-[1.285rem] font-semibold">
                  {item.title}
                </p>
                <p className="text-left text-normal font-normal leading-[1.301875] ">
                  {item.text}
                </p>
              </div>
              {item.icon && iconPositon(index, item.icon)}
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
}
