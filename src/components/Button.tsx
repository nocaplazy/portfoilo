import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  Icon?: ReactNode;
  iconLocation?: 'right' | 'left';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  iconLocation = 'right',
  Icon,
  children,
  onClick,
  className,
}: PropsType) => {
  return (
    <_Wrapper className={className} onClick={onClick}>
      {iconLocation === 'left' && Icon && Icon}
      {children}
      {iconLocation === 'right' && Icon && Icon}
    </_Wrapper>
  );
};

const _Wrapper = styled.button`
  height: 70px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  font-size: 28px;
  ${({ theme }) => theme.font.medium};
  gap: 12px;
  transition: 0.25s;
  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;
