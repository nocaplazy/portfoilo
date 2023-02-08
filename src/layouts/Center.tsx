import styled from 'styled-components';
import { ReactNode } from 'react';

interface PropsType {
  margin?: string;
  children: ReactNode;
}

export const Center = ({ children, margin }: PropsType) => {
  return <_Wrapper margin={margin}>{children}</_Wrapper>;
};

export const _Wrapper = styled.div<{ margin: string }>`
  display: flex;
  justify-content: center;
  margin: ${({ margin }) => margin};
`;
