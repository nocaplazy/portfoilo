import React, { useState } from 'react';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipContent = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
`;

const TooltipWrapperHover = styled(TooltipWrapper)`
  &:hover ${TooltipContent} {
    visibility: visible;
    opacity: 1;
  }
`;

type TooltipProps = {
  title: string;
  children: React.ReactNode;
};

export const Tooltip = ({ title, children }: TooltipProps) => {
  return (
    <TooltipWrapperHover>
      {children}
      <TooltipContent>{title}</TooltipContent>
    </TooltipWrapperHover>
  );
};
