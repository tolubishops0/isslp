"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { ButtonPropss } from "../../../types/global";
import Image from "next/image";

const StyedButton = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  border: double 2px transparent;
  background-image: linear-gradient(#110013, #110013),
    linear-gradient(92.14deg, #db00ff 0%, #5200ff 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  transition: background-image 0.3s ease-in;
  &:hover {
    background-image: linear-gradient(#110013, #110013),
      linear-gradient(92.14deg, #5200ff 0%, #db00ff 100%);
  }
`;

const StyedButtonText = styled.p<{ textcolor?: string }>`
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  /* transition: color 0.3s ease-in;
  &:hover {
    color: #acaaaa;
  } */
`;

export default function GradientButton({ text }: ButtonPropss) {
  return (
    <StyedButton>
      <StyedButtonText>{text}</StyedButtonText>
    </StyedButton>
  );
}
