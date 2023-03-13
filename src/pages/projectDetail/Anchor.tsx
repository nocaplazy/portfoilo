import styled from 'styled-components';

interface PropsType {
  href: string;
  Icon: JSX.Element;
  children: string;
}

export const Anchor = ({ href, Icon, children }: PropsType) => {
  return (
    <_Wrapper href={href}>
      {Icon}
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
