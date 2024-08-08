import React from "react";
import Image from "next/image";
import { search } from "@/lib/utils";

type placeholderProps = {
  placeholder: string;
  type: string;
};

export default function InputField({ placeholder, type }: placeholderProps) {
  return (
    <div className="border-[rgba(255, 255, 255, 0.2)] rounded-[4px] border flex justify-between px-3 h-[4.5625rem]">
      <input
        type={type}
        placeholder={placeholder}
        className="border-0 bg-transparent focus:outline-0 w-full placeholder:text-[0.6rem] md:placeholder:text-[0.9rem] placeholder:font-normal placeholder:leading-[1.22] placeholder:text-mediumGray placeholder:font-sans h-full"
      />
      <Image src={search} alt="search-icon" />
    </div>
  );
}
