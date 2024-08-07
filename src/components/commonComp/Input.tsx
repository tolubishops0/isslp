"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { InputFieldPropss, AuthFormData } from "../../../types/global";
import { passclose, passopen } from "@/lib/utils";
import Image from "next/image";

const StyledInputContainer = styled.div`
`;
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

const StyledLabel = styled.p`
  color: black;
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;
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

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.7rem;
`;

export default function Input({
  label,
  placeholder,
  type = "text",
  fieldname,
  error,
  register,
}: InputFieldPropss & { register: UseFormRegister<AuthFormData> }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputField>
        <StyledInput
          placeholder={placeholder}
          type={isPasswordVisible ? "text" : type}
          {...register(fieldname)}
        />
        {type === "password" && (
          <StyledToggleButton onClick={togglePasswordVisibility}>
            <Image
              src={isPasswordVisible ? passopen : passclose}
              alt="password-icon"
            />
          </StyledToggleButton>
        )}
      </StyledInputField>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledInputContainer>
  );
}
