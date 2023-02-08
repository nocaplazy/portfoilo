import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  Icon?: ReactNode;
  iconLocation?: 'right' | 'left';
  children: ReactNode;
  margin?: string;
  onClick?: () => void;
}

export const Button = ({
  iconLocation = 'right',
  Icon,
  children,
  margin,
  onClick,
}: PropsType) => {
  return (
    <_Wrapper margin={margin} onClick={onClick}>
      {iconLocation === 'left' && Icon && Icon}
      {children}
      {iconLocation === 'right' && Icon && Icon}
    </_Wrapper>
  );
};

const _Wrapper = styled.button<{ margin: string }>`
  height: 70px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  font-size: 28px;
  margin: ${({ margin }) => margin};
  ${({ theme }) => theme.font.medium};
  gap: 22px;
  transition: 0.25s;
  :hover {
    background-color: ${({ theme }) => theme.color.gray4};
  }
`;
