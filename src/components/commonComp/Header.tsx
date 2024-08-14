"use client";
import React from "react";
import styled from "styled-components";
import { HeaderProps } from "../../../types/global";

const StyledContainer = styled.div<{}>`
  /* background-color: red; */
`;

const StyledHeader = styled.h1<{ active?: string }>`
  background: ${({ active }) =>
    active === "true"
      ? "linear-gradient(180deg, #8661AE 0%, #420C7C 100%)"
    : "black"
      };
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.1rem;
  text-transform: capitalize;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;

const StyledBottom = styled.div`
  width: 100%;
  height: 0.3rem;
  background-color: black;
`;

export default function Header({ text, active }: HeaderProps) {
  return (
    <StyledContainer>
      <StyledHeader active={active}>{text}</StyledHeader>
      {/* <StyledBottom /> */}
    </StyledContainer>
  );
}
