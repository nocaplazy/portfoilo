import styled from 'styled-components';

interface PropsType {
  href: string;
  Icon: JSX.Element;
  children: string;
}

export const Anchor = ({ href, Icon, children }: PropsType) => {
  return (
    <Container href={href}>
      {Icon}
      <Link>{children}</Link>
    </Container>
  );
};

const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 10px;
  border-radius: 4px;
  color: #000;
  text-decoration: none;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;

const Link = styled.span`
  font-size: 16px;
`;
