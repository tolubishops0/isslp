"use client";
import React, { useState } from "react";
import Image from "next/image";
import { heroForm, help } from "../../lib/utils";
import InputField from "./InputField";

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
            <InputField placeholder="Upload your file here" type="text" />
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
            <InputField
              placeholder="Search for textbooks, step-by-step explanations to homework questions, and more..."
              type="text"
            />
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
            <InputField placeholder="Summarize your texts here" type="text" />
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
              className={` flex-1 flex items-center justify-center  cursor-pointer border-[#31280C] transition duration-300 ${
                formState === index ? "bg-[#E9D5FF]" : "bg-white"
              } ${
                index === 0
                  ? "border-t-2 border-r-[1px] border-b-0 border-l-2"
                  : index === 1
                  ? "border-t-2 border-r-[1px] border-b-0 border-l-[1px]"
                  : "border-t-2 border-r-2 border-b-0 border-l-[1px]"
              } rounded-t-[12px]`}>
              <div className="flex flex-col items-center justify-center md:flex-row md:gap-x-1 py-4">
                <Image
                  alt="askaqust-icon"
                  src={item.icon}
                  className="w-[1.5rem]"
                />
                <span className="mt-2 md:mt-0 text-center uppercase text-[0.5rem] md:text-[1rem] text-[#1B0043] font-bold">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="form-border h-[9.625rem] flex items-center">
          <div className="w-full px-[1.5rem] mx-auto "> {renderForm()}</div>
        </div>
      </div>
    </div>
  );
}
