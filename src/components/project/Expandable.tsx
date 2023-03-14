import { useState } from 'react';
import styled from 'styled-components';

export const Expandable = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Title>{title}</Title>
        <_Button>{isOpen ? '접기' : '펼치기'}</_Button>
      </Header>
      <Content isOpen={isOpen}>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 16px;
`;

const Header = styled.summary`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Content = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-top: 16px;
`;

const _Button = styled.button`
  padding: 8px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  outline: none;
`;
