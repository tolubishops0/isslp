"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { ButtonPropss } from "../../../types/global";
import Image from "next/image";

const StyedButton = styled.button<{ gradient?: string; disabled?: boolean }>`
  background: ${({ gradient, disabled }) =>
    // disabled
    //   ? "#d3d3d3"
    // :
    gradient === "true"
      ? "linear-gradient(180deg, #8661AE 0%, #420C7C 100%)"
      : "rgba(255, 255, 255, 1)"};

  border-radius: 6px;
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e7ec;
  cursor: pointer;
  /* cursor: ${(disabled) => (disabled ? "not-allowed" : "pointer")}; */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  transition: background 0.3s ease-in;
  &:hover {
    background: ${({ gradient, disabled }) =>
      !disabled && gradient === "true"
        ? "linear-gradient(180deg, rgba(134, 97, 174, 0.5) 0%, rgba(66, 12, 124, 0.9) 100%)"
        : "rgba(255, 255, 255, 0.2)"};
  }
`;

const StyedButtonText = styled.p<{ textcolor?: string }>`
  color: ${({ textcolor }) => (textcolor ? textcolor : "white")};
  font-weight: 700;
  font-size: 1.125rem;
  text-align: center;
`;

export default function Button({
  text,
  gradient,
  icon,
  textcolor,
  disabled,
}: ButtonPropss) {
  console.log(disabled);
  return (
    <StyedButton
      // disabled={disabled}
      gradient={gradient}>
      {icon && <Image src={icon} alt="button-icon" className="mr-3 w-[1rem]" />}
      <StyedButtonText textcolor={textcolor}>{text}</StyedButtonText>
    </StyedButton>
  );
}
