"use client";
import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: rgb(237, 231, 255);
  border-radius: 12px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  height: 1.8125rem;
  background: linear-gradient(90deg, #9e00ff 0%, #00ddff 100%);
  width: ${({ progress }) => `${progress}%`};
  transition: width 0.3s ease-in-out;
  border-radius: 100px;
`;

const ProgressBarText = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #333;
  padding: 0.25rem 0;
`;

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFill progress={progress} />
      {/* <ProgressBarText>{progress}%</ProgressBarText> */}
    </ProgressBarContainer>
  );
};

export default ProgressBar;
