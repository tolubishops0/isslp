"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { ButtonPropss } from "../../../types/global";
import Image from "next/image";

const StyedButton = styled.button<{ gradient?: string }>`
  background: ${({ gradient }) =>
    gradient === "true"
      ? "linear-gradient(180deg, #8661AE 0%, #420C7C 100%)"
      : "white"};

  border-radius: 6px;
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e7ec;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
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
}: ButtonPropss) {
  return (
    <StyedButton gradient={gradient}>
      {icon && <Image src={icon} alt="button-icon" className="mr-3 w-[1rem]" />}
      <StyedButtonText textcolor={textcolor}>{text}</StyedButtonText>
    </StyedButton>
  );
}
