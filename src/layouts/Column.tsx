import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
}

export const Column = ({ children }: PropsType) => {
  return <_Wrapper>{children}</_Wrapper>;
};

const _Wrapper = styled.div`
  width: 1112px;
  margin: 0 auto;
`;
