'use client'
import React from "react";
import Header from "@/components/commonComp/Header";
import InputDropdown from "@/components/commonComp/InputDropdown";

export default function SelectCountry() {
  return (
    <div>
      <Header text="Select your country here 👇" />
      <div>
        <InputDropdown />
      </div>
    </div>
  );
}
