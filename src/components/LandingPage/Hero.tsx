"use client";
import React, { useState } from "react";
import Image from "next/image";
import { meshbg, heroForm, search, help } from "../../../lib/utils";

export default function Hero() {
  const [formState, setFormState] = useState<number | null>(1);

  const handleFormState = (index: number) => {
    setFormState(index);
  };

  const renderForm = () => {
    switch (formState) {
      case 0:
        return (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter question for index 0"
              className="border p-2 w-full"
            />
            <Image src={search} alt="search-icon" />
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
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter for index 2"
              className="border p-2 w-full"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-[rgba(255,244,161,0.1)]">
      <div className="relative w-[90%] h-full">
        <Image
          alt="background-img"
          src={meshbg}
          objectFit="contain"
          className="z-0 absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-[32%] h-auto"
        />
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-12 w-full">
          <div className="w-[70%] mx-auto text-left md:text-center z-10 flex flex-col justify-center items-center gap-y-2">
            <h1 className="font-bold text-primary text-2xl leading-[2] md:leading-[1.2] md:text-5xl  xl:text-[3.25rem]">
              Study with AI. Transform your Learning
            </h1>
            <h2 className="text-darkGray font-normal text-base w-[90%]">
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
            className="w-[70%] mx-auto flex flex-col justify-center bg-white">
            <div className="flex  md:w-auto">
              {heroForm.map((item, index) => (
                <div
                  onClick={() => handleFormState(index)}
                  key={item.label}
                  className={`flex-1 cursor-pointer border-[#31280C] ${
                    formState === index ? "bg-[#E9D5FF]" : ""
                  } ${
                    index === 0
                      ? "border-t-2 border-r-[1px] border-b-0 border-l-2"
                      : index === 1
                      ? "border-t-2 border-r-[1px] border-b-0 border-l-[1px]"
                      : "border-t-2 border-r-2 border-b-0 border-l-[1px]"
                  } rounded-t-lg`}>
                  <div className="flex  flex-col items-center justify-center md:flex-row md:gap-x-3 py-4">
                    <Image alt="askaqust-icon" src={item.icon} />
                    <span className="text-center uppercase text-xs md:text-[1.125rem] text-darkBrown font-bold">
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
              className="h-[9.625rem] flex items-center border-2 border-borderDarkColor">
              <div className="w-[90%] mx-auto"> {renderForm()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
