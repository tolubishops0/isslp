"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { arrdownblck } from "@/lib/utils";
import { DropdownOption, DropdownProps } from "../../../types/global";

const StyledInputDropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInputDropdown = styled.div<{ isDropdownVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  height: 15rem;
  width: 100%;
  margin-top: 0.3rem;
  border: 1px solid #d0d5dd;
  background: white;
  border-radius: 0.5rem;
  overflow-y: scroll;
  z-index: 1000;
  opacity: ${({ isDropdownVisible }) => (isDropdownVisible ? "1" : "0")};
  transition: opacity 0.3s ease, height 0.3s ease;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const StyledInput = styled.input<{ hasIcon: boolean }>`
  font-size: 1rem;
  border: 1px solid #d0d5dd;
  background-color: #f9fafb;
  border-radius: 6px;
  height: 3.4rem;
  width: 100%;
  padding-left: ${({ hasIcon }) => (hasIcon ? "2.4rem" : ".5rem")};
  cursor: pointer;
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
`;

const StyledOptionIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
`;

const StyledToggleOption = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #ebe8e8;
  }
  span {
    margin-left: 0.5rem;
  }
`;

export default function InputDropdown({ options, placeholder }: DropdownProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [value, setValue] = useState<DropdownOption | null>(null);

  const handleOptionSelection = (option: DropdownOption) => {
    setValue(option);
    setIsDropdownVisible(false);
  };

  return (
    <StyledInputDropdownContainer
      onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
      <StyledInput
        readOnly
        placeholder={placeholder}
        value={value?.option || ""}
        hasIcon={!!value?.icon}
      />
      {value?.icon && (
        <StyledOptionIcon>
          <Image
            src={value.icon}
            alt={`${value?.option}-icon`}
            className="w-[1rem]"
          />
        </StyledOptionIcon>
      )}
      <StyledToggleButton>
        <Image src={arrdownblck} alt="toggle-icon" />
      </StyledToggleButton>
      {isDropdownVisible && (
        <StyledInputDropdown isDropdownVisible={isDropdownVisible}>
          {options.map((item) => (
            <StyledToggleOption
              key={item.option}
              onClick={() => handleOptionSelection(item)}>
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={`${item.option}-icon`}
                  className="w-4"
                />
              )}
              <span>{item.option}</span>
            </StyledToggleOption>
          ))}
        </StyledInputDropdown>
      )}
    </StyledInputDropdownContainer>
  );
}
