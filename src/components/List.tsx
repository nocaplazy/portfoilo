import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  listItem: ReactNode[];
  className?: string;
}

export const List = ({ listItem, className }: PropsType) => {
  return (
    <_Wrapper className={className}>
      {listItem.map((Item, idx) => (
        <_Li key={idx}>{Item}</_Li>
      ))}
    </_Wrapper>
  );
};

const _Li = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  :hover {
    ::before {
      background-color: ${({ theme }) => theme.color.point};
    }
  }
  ::before {
    transition: 0.25s;
    content: '';
    display: inline-block;
    border-radius: 70%;
    width: 7px;
    height: 7px;
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;

const _Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
