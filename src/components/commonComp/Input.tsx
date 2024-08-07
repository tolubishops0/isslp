"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";
import { InputFieldPropss, AuthFormData } from "../../../types/global";

const StyledInputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  margin-bottom: 0.5rem;
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
  margin-bottom: 0.3rem;
  text-transform: capitalize;
`;

const StyledToggleButton = styled.span`
  position: absolute;
  right: 0.5rem;
  top: 60%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  color: #007bff;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
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
      <StyledInput
        placeholder={placeholder}
        type={isPasswordVisible ? "text" : type}
        {...register(fieldname)}
      />
      {type === "password" && (
        <StyledToggleButton onClick={togglePasswordVisibility}>
          {isPasswordVisible ? "Hide" : "Show"}
        </StyledToggleButton>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledInputContainer>
  );
}
