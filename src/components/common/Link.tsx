import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  Icon: ReactNode;
  children: ReactNode;
  href: string;
}

export const Link = ({ Icon, children, href }: PropsType) => {
  return (
    <_Wrapper href={href}>
      <Icon />
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.a`
  ${({ theme }) => theme.font.semiBold};
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: underline;
  text-underline-position: under;
`;
