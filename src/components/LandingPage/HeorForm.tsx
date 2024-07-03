"use client";
import React, { useState } from "react";
import Image from "next/image";
import { heroForm, search, help } from "../../../lib/utils";

export default function HeorForm() {
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
                placeholder="Convert you pdf here"
                className="border-0 focus:outline-0 w-full placeholder:text-[0.9rem] placeholder:font-normal placeholder:leading-[1.22] placeholder:text-mediumGray placeholder:font-sans"
              />
              <Image src={search} alt="search-icon" />
            </div>
            <div className="font-normal text-lightGray text-[0.6rem] md:text-[0.875rem] leading-[1] flex gap-x-1 items-center">
              <p className="">Try typing in a book title or ISBN</p>
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
            <div className="border-coolGray border flex justify-between px-3 h-[3rem] transition-all">
              <input
                type="email"
                placeholder="Search for textbooks, step-by-step explanations to homework questions, and more..."
                className="border-0 focus:outline-0 w-full placeholder:text-[0.9rem] placeholder:font-normal placeholder:leading-[1.22] placeholder:text-mediumGray placeholder:font-sans"
              />
              <Image src={search} alt="search-icon" />
            </div>
            <div className="font-normal text-lightGray text-[0.6rem] md:text-[0.875rem] leading-[1] flex gap-x-1 items-center">
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
                placeholder="Summarize your texts here"
                className="border-0 focus:outline-0 w-full placeholder:text-[0.6rem] md:placeholder:text-[0.9rem] placeholder:font-normal placeholder:leading-[1.22] placeholder:text-mediumGray placeholder:font-sans"
              />
              <Image src={search} alt="search-icon" />
            </div>
            <div className="font-normal text-lightGray text-[0.6rem] md:text-[0.875rem] leading-[1] flex gap-x-1 items-center">
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
    <div>
      <div className="hero-form w-full md:w-full xl:w-[70%] h-[14.625rem] mx-auto flex flex-col justify-center bg-white">
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
                <span className="mt-2 md:mt-0 text-center uppercase text-[0.5rem] md:text-[1.125rem] text-darkBrown font-bold">
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
          <div className="w-[90%] mx-auto "> {renderForm()}</div>
        </div>
      </div>
    </div>
  );
}
