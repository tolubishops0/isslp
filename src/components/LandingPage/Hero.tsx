"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  meshbg,
  heroForm,
  search,
  help,
  rightwireframe,
  lefttwireframe,
  leftbluestart,
  rightyellowstar,
  intelstar,
  bluerightframe,
  yellowsmstart,
} from "../../../lib/utils";

export default function Hero() {
  const [formState, setFormState] = useState<number | null>(1);

  const handleFormState = (index: number) => {
    setFormState(index);
  };

  const renderForm = () => {
    switch (formState) {
      case 0:
        return (
          <div className="flex flex-col gap-y-6">
            <div className="border-coolGray border flex justify-between px-3 h-[3rem]">
              <input
                type="email"
                placeholder="Search for textbooks for index 0"
                className="border-0 focus:outline-0 w-full placeholder:text-[0.9rem] placeholder:font-normal placeholder:leading-[1.22] placeholder:text-mediumGray placeholder:font-sans"
              />
              <Image src={search} alt="search-icon" />
            </div>
            <div className="font-normal text-lightGray text-[0.875rem] leading-[1] flex gap-x-1 items-center">
              <p>Try typing in a book title or ISBN</p>
              <Image
                src={help}
                alt="help-icon"
                className="w-[0.9rem] cursor-pointer"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col gap-y-6">
            <div className="border-coolGray border flex justify-between px-3 h-[3rem]">
              <input
                type="email"
                placeholder="Search for textbooks, step-by-step explanations to homework questions, and more..."
                className="border-0 focus:outline-0 w-full placeholder:text-[0.9rem] placeholder:font-normal placeholder:leading-[1.22] placeholder:text-mediumGray placeholder:font-sans"
              />
              <Image src={search} alt="search-icon" />
            </div>
            <div className="font-normal text-lightGray text-[0.875rem] leading-[1] flex gap-x-1 items-center">
              <p>Try typing in a book title or ISBN</p>
              <Image
                src={help}
                alt="help-icon"
                className="w-[0.9rem] cursor-pointer"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-y-6">
            <div className="border-coolGray border flex justify-between px-3 h-[3rem]">
              <input
                type="email"
                placeholder="Search for textbooks for index 2"
                className="border-0 focus:outline-0 w-full placeholder:text-[0.9rem] placeholder:font-normal placeholder:leading-[1.22] placeholder:text-mediumGray placeholder:font-sans"
              />
              <Image src={search} alt="search-icon" />
            </div>
            <div className="font-normal text-lightGray text-[0.875rem] leading-[1] flex gap-x-1 items-center">
              <p>Try typing in a book title or ISBN</p>
              <Image
                src={help}
                alt="help-icon"
                className="w-[0.9rem] cursor-pointer"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex items-center justify-center h-sreen bg-[rgba(255,244,161,0.1)]">
      <div className="relative w-[90%] xl:w-[84%] xl:h-full">
        <Image
          alt="background-img"
          src={meshbg}
          objectFit="contain"
          className="hidden md:block z-0 absolute top-[20%] xl:top-[15%] left-1/2 transform -translate-x-1/2 -translae-y-1/2 w-[70%] md:w-[32%] h-auto"
        />
        <div className="flex flex-col justify-start items-start gap-y-16 xl:gap-y-12 w-full">
          <div className="w-full  xl:w-[70%] mx-auto text-left xl:text-center z-10 flex flex-col justify-center items-center gap-y-6 md:gap-8 xl:gap-y-2 mt-[4rem] md:mt-[6rem] xl:mt-[7rem]">
            <h1 className="font-bold text-primary text-2xl leading-[2] md:leading-[1.2] md:text-5xl xl:text-[3.25rem]">
              Study with AI. Transform your Learning
            </h1>
            <h2 className="w-full  text-darkGray font-normal text-base ">
              Unlock your potential with personalized study tools. Study 10x
              faster, become 10x better, and ace your exams.
            </h2>
          </div>
          <div
            style={{
              // borderWidth: "2px 0 2px 0",
              borderColor: "#31280C",
              borderRadius: "0px 0px 12px 12px",
              boxShadow: "-7px 10px 5px 0px rgba(0,0,0,1)",
            }}
            className="w-full md:w-full xl:w-[70%] h-[14.625rem] mx-auto flex flex-col justify-center bg-white">
            <div className="flex md:w-auto h-[5rem]">
              {heroForm.map((item, index) => (
                <div
                  onClick={() => handleFormState(index)}
                  key={item.label}
                  className={`flex-1 flex items-center justify-center  cursor-pointer border-[#31280C] ${
                    formState === index ? "bg-[#E9D5FF]" : ""
                  } ${
                    index === 0
                      ? "border-t-2 border-r-[1px] border-b-0 border-l-2"
                      : index === 1
                      ? "border-t-2 border-r-[1px] border-b-0 border-l-[1px]"
                      : "border-t-2 border-r-2 border-b-0 border-l-[1px]"
                  } rounded-t-[12px]`}>
                  <div className="flex flex-col items-center justify-center md:flex-row md:gap-x-3 py-4">
                    <Image alt="askaqust-icon" src={item.icon} />
                    <span className="text-center uppercase text-[0.6rem] md:text-[1.125rem] text-darkBrown font-bold">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                borderWidth: "2px 2px 2px 2px",
                // borderWidth: "0 2px 2px 1px",
                borderColor: "#31280C",
                borderRadius: "0px 0px 12px 12px ",
              }}
              className="h-[9.625rem] flex items-center">
              <div className="w-[90%] mx-auto"> {renderForm()}</div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute top-[40%] sm:top-[35%] xsm:top-[30%] left-[50%] md:top-[47%] md:left-[24%] h-auto"
          animate={{
            scale: [0.8, 1.1, 1],
            opacity: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}>
          <Image src={yellowsmstart} alt="search-icon" className="h-auto" />
        </motion.div>
        <motion.div
          className="absolute top-[5%] md:top-[15%] left-[18%] h-auto "
          animate={{
            scale: [0.8, 1.1, 1],
            opacity: [1, 0.9, 1],
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}>
          <Image src={leftbluestart} alt="search-icon" className="h-auto" />
        </motion.div>
        <motion.div
          className="absolute top-[5%] right-[5%] md:top-[11%] md:right-[19%]  h-auto "
          animate={{
            scale: [0.8, 1.1, 1],
            opacity: [1, 0.9, 1],
          }}
          transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            repeatType: "mirror",
          }}>
          {" "}
          <Image src={rightyellowstar} alt="search-icon" className="h-auto " />
        </motion.div>

        <Image
          src={bluerightframe}
          alt="search-icon"
          className="hidden xl:block absolute bottom-[9%] right-[8%] w-[5%] h-auto "
        />

        <Image
          src={lefttwireframe}
          alt="search-icon"
          className="hidden xl:block absolute top-[16%] left-[-1%] w-[16%] h-auto "
        />
        <Image
          src={rightwireframe}
          alt="search-icon"
          className="hidden xl:block absolute top-[3%] right-[2%] w-[14%]"
        />
      </div>
    </div>
  );
}
