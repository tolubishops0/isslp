import React from "react";
import Image from "next/image";
import { search } from "@/lib/utils";

type placeholderProps = {
  placeholder: string;
  type: string;
};

export default function InputField({ placeholder, type }: placeholderProps) {
  return (
    <div className="border-coolGray border flex justify-between px-3 h-[3rem]">
      <input
        type={type}
        placeholder={placeholder}
        className="border-0 focus:outline-0 w-full placeholder:text-[0.6rem] md:placeholder:text-[0.9rem] placeholder:font-normal placeholder:leading-[1.22] placeholder:text-mediumGray placeholder:font-sans"
      />
      <Image src={search} alt="search-icon" />
    </div>
  );
}
