import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  gap: string;
}

export const FlexWrap = ({ children, gap }: PropsType) => {
  return <_Wrapper gap={gap}>{children}</_Wrapper>;
};

const _Wrapper = styled.div<{ gap: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap};
`;
