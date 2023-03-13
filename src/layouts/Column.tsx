import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  className?: string;
}

export const Column = ({ children, className }: PropsType) => {
  return <_Wrapper className={className}>{children}</_Wrapper>;
};

const _Wrapper = styled.div`
  width: 1082px;
  padding: 0 15px;
  margin: 0 auto;
`;
