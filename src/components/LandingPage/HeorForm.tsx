"use client";
import React, { useState } from "react";
import Image from "next/image";
import { heroForm, help } from "../../lib/utils";

export default function HeorForm() {
  const [formState, setFormState] = useState<number | null>(1);

  const handleFormState = (index: number) => {
    setFormState(index);
  };

  const TopArea = () => {
    return (
      <div className="top-area flex md:w-auto h-[4.5rem]">
        {heroForm.map((item, index) => (
          <div
            onClick={() => handleFormState(index)}
            key={item.label}
            className={`flex-1 flex items-center justify-center cursor-pointer ${
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
    );
  };

  const renderFormContent = (placeholderText: string) => (
    <div className="flex flex-col justify-center gap-y-2">
      <div className="md:border border-[lightGray] rounded-[4px] md:p-4 md:max-h-[4.5625rem] ">
        <p className=" text-lightGray text-[0.8rem] 2xl:text-sm font-normal transition-opacity duration-500 ease-in-out">
          {placeholderText}
        </p>
      </div>
      <p className="font-normal text-lightGray text-[0.6rem] md:text-[0.8rem]">
        Get the best educational resources here
      </p>
    </div>
  );

  const renderForm = () => {
    switch (formState) {
      case 0:
        return renderFormContent(
          "As a professional you can boost productivity, advance your careers, and manage information effectively through features designed for research, document summarization, and professional development"
        );
      case 1:
        return renderFormContent(
          "As a student, you can streamline your learning process, enhance academic performance, and improve time management by accessing tools for note-taking, study aids, and collaborative learning."
        );
      case 2:
        return renderFormContent(
          "As a test taker you can benefit from targeted exam preparation, practice tools, and performance analysis to increase confidence and achieve desired results."
        );
      default:
        return null;
    }
  };
  return (
    <div className="relative w-full md:w-full xl:w-[70%] mx-auto h-[10.5rem]">
      <div className="absolute top-[-43%] w-full pl-2">
        <TopArea />
      </div>
      <div className="hero-form h-full mx-auto flex flex-col justify-center">
        <div className="w-full px-2 md:px-[1.5rem] mx-auto">
          {" "}
          {renderForm()}
        </div>
      </div>
    </div>
  );
}
