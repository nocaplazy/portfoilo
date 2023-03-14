import { Tooltip } from '@/components/ToolTip';
import styled from 'styled-components';

interface PropsType {
  href: string;
  Icon: JSX.Element;
}

export const Anchor = ({ href, Icon }: PropsType) => {
  return (
    <Tooltip title={href}>
      <Container href={href}>{Icon}</Container>
    </Tooltip>
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
