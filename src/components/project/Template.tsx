import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  title: string;
}

export const Template = ({ children, title }: PropsType) => {
  return (
    <_Wrapper>
      <h2>{title}</h2>
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
