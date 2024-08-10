"use client";
import React from "react";
import styled from "styled-components";
import { ButtonPropss } from "../../../types/global";
import Image from "next/image";

const StyledButton = styled.button<{ bgcolor?: string; gradient?: string }>`
  background: ${({ bgcolor, gradient }) =>
    bgcolor
      ? bgcolor
      : gradient === "true"
      ? "linear-gradient(180deg, #8661AE 0%, #420C7C 100%)"
      : "white"};

  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
  border: ${({ bgcolor, gradient }) =>
    bgcolor || gradient ? "1px thin transparent" : "1px solid #667185"};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  transition: background-image 0.2s ease-in;
  &:hover {
    background-image: ${({ bgcolor, gradient }) =>
      bgcolor
        ? "rgba(27, 0, 78, .9)"
        : gradient
        ? "linear-gradient(180deg, #8661AE 0%, #420C7C 100%)"
        : "rgba(255, 255, 255, 0.5)"};
  }
`;

const StyledButtonText = styled.p<{ textcolor?: string }>`
  color: ${({ textcolor }) => (textcolor ? textcolor : "white")};
  font-weight: 500;
  font-size: 1.125rem;
  text-align: center;
  transition: color 0.3s ease-in;
  &:hover {
    color: #acaaaa;
  }
`;

export default function Button({
  text,
  bgcolor,
  icon,
  textcolor,
  gradient,
}: ButtonPropss) {
  return (
    <StyledButton bgcolor={bgcolor} gradient={gradient}>
      {icon && <Image src={icon} alt="button-icon" className="mr-3 w-[1rem]" />}
      <StyledButtonText textcolor={textcolor}>{text}</StyledButtonText>
    </StyledButton>
  );
}
