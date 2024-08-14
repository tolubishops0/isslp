"use client";
import React, { useState } from "react";
import Image from "next/image";
import { heroForm } from "@/lib/utils";
import { motion } from "framer-motion";

type FormProps = {
  formState: number | null;
  handleFormState: (index: number) => void;
};

const TopArea = ({ formState, handleFormState }: FormProps) => {
  return (
    <div className="top-area flex md:w-auto h-[4.5rem]">
      {heroForm.map((item, index) => (
        <div
          key={item.label}
          onClick={() => handleFormState(index)}
          className={`flex-1 flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out ${
            formState === index ? "bg-[#E9D5FF]" : "bg-white"
          } ${
            index === 0
              ? "border-0"
              : index === 1
              ? "border-t-0 border-r border-b-0 border-l"
              : "border-0"
          } rounded-t-[10px]`}>
          <div className="flex flex-col items-center justify-center md:flex-row md:gap-x-1 py-4">
            <Image alt="askaqust-icon" src={item.icon} className="w-[1.5rem]" />
            <span className="mt-2 md:mt-0 text-center uppercase text-[0.5rem] md:text-[1rem] text-[#1B0043] font-bold">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function HeorForm() {
  const [formState, setFormState] = useState<number>(1);

  const handleFormState = (index: number) => {
    setFormState(index);
  };

  const renderFormContent = (placeholderText: string) => (
    <div className="flex flex-col justify-center gap-y-2 ">
      <div className="md:border border-[rgba(255,255,255,0.5)] rounded-[4px] md:p-4 md:max-h-[4.5625rem] ">
        <motion.p
          {...framerSidebarBackground}
          className={`text-lightGray text-[0.8rem] 2xl:text-sm font-normal transition-opacity duration-500 ease-in-out opacity-100`}>
          {placeholderText}
        </motion.p>
      </div>
      <p className="font-normal text-lightGray text-[0.6rem] md:text-[0.8rem]">
        Get the best educational resources here
      </p>
    </div>
  );

  const renderForm = () => {
    const content = [
      "As a professional you can boost productivity, advance your careers, and manage information effectively through features designed for research, document summarization, and professional development",
      "As a student, you can streamline your learning process, enhance academic performance, and improve time management by accessing tools for note-taking, study aids, and collaborative learning.",
      "As a test taker you can benefit from targeted exam preparation, practice tools, and performance analysis to increase confidence and achieve desired results.",
    ];

    return renderFormContent(content[formState]);
  };

  return (
    <div className="relative w-full md:w-full xl:w-[70%] mx-auto h-[10.5rem]">
      <div className="absolute top-[-43%] w-full pl-2">
        <TopArea formState={formState} handleFormState={handleFormState} />
      </div>
      <div className="hero-form h-full mx-auto flex flex-col justify-center">
        <div className="w-full px-2 md:px-[1.5rem] mx-auto">{renderForm()}</div>
      </div>
    </div>
  );
}

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};