import React from "react";
import { ButtonProps } from "../../../types/global";

export default function Button({
  text,
  width,
  height,
  color,
  bgColor,
}: ButtonProps) {
  console.log(text, width, height, color, bgColor);
  return (
    <button
      className={`w-[12.5rem] flex items-center justify-center w-[${width}rem] h-[${height}rem] rounded-lg bg-${bgColor} text-${color} font-semibold leading-[1.375] active:scale-105 hover:bg-slate-900`}>
      {text}
    </button>
  );
}
