import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { passclose } from "@/lib/utils";

const StyledInputField = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  height: 3.5rem;
  width: 100%;
  background-color: white;
  padding-left: 0.5rem;

  &::placeholder {
    font-weight: 400;
    font-size: 0.85rem;
    color: #98a2b3;
  }
`;

const StyledToggleButton = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  color: #007bff;
`;

export default function InputDropdown() {
  return (
    <StyledInputField>
      <StyledInputField>
        <StyledInput />

        <StyledToggleButton>
          <Image src={passclose} alt="password-icon" />
        </StyledToggleButton>
      </StyledInputField>
    </StyledInputField>
  );
}
