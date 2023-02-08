import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  listItem: ReactNode[];
  margin?: string;
}

export const List = ({ listItem, margin }: PropsType) => {
  return (
    <_Wrapper margin={margin}>
      {listItem.map((Item, idx) => {
        return <_Li key={idx}>{Item}</_Li>;
      })}
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
    background-color: ${({ theme }) => theme.color.gray1};
  }
`;

const _Wrapper = styled.ul<{ margin: string }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: ${({ margin }) => margin};
`;
