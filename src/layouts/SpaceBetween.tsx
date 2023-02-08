import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
}

export const SpaceBetween = ({ children }: PropsType) => {
  return <_Wrapper>{children}</_Wrapper>;
};

const _Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
