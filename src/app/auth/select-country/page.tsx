"use client";
import React from "react";
import Header from "@/components/commonComp/Header";
import InputDropdown from "@/components/commonComp/InputDropdown";
import { countries } from "@/lib/utils";
import Button from "@/components/commonComp/Button";
import ProgressBar from "@/components/commonComp/ProgressBar";

export default function SelectCountry() {
  return (
    <div className="w-full h-[100vh] lg:w-[80%] mx-auto flex flex-col gap-y-[2rem] pt-[2rem]">
      <ProgressBar progress={50} />
      <div className="flex flex-col justify-center mt-[5rem]">
        <div className="flex justify-center items-center">
          <Header text="Select your country here 👇" />
        </div>
        <div className="flex flex-col gap-y-6 mt-[3rem]">
          <InputDropdown
            placeholder="select your country"
            options={countries}
          />
          <Button bgcolor="#1B004E" text="Next" />
          <Button textcolor="#98a2b3" text="Do this later!" />
        </div>
      </div>
    </div>
  );
}
