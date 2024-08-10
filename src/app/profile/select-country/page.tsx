"use client";
import React from "react";
import Header from "@/components/commonComp/Header";
import InputDropdown from "@/components/commonComp/InputDropdown";
import { countries } from "@/lib/utils";
import Button from "@/components/commonComp/Button";
import ProgressBar from "@/components/commonComp/ProgressBar";
import Link from "next/link";
import { DropdownOption } from "../../../../types/global";
import { useGlobalContext } from "../ProfileContext";

export default function SelectCountry() {
  const { setCountry } = useGlobalContext();

  const getCountry = (option: DropdownOption) => {
    setCountry(option);
  };
  
  return (
    <div className="w-full h-[100vh] lg:w-[80%] mx-auto flex flex-col gap-y-[2rem] pt-[2rem]">
      <ProgressBar progress={50} />
      <div className="flex flex-col justify-center mt-[5rem]">
        <div className="flex justify-center items-center">
          <Header text="Select your country here 👇" />
        </div>
        <div className="flex flex-col gap-y-8 mt-[3rem]">
          <InputDropdown
            placeholder="select your country"
            options={countries}
            getValue={getCountry}
          />
          <Link href="/profile/todo">
            <Button gradient="true" text="Next" />
          </Link>
          <Link href="/profile/todo">
            <Button textcolor="#98a2b3" text="Do this later!" />
          </Link>
        </div>
      </div>
    </div>
  );
}
