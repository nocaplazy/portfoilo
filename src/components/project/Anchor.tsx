import { GithubSvg, LinkSvg } from '@/assets';
import { Tooltip } from '@/components/ToolTip';
import styled from 'styled-components';

interface PropsType {
  href: string;
  Icon: IconType;
}

const IconObj = {
  link: {
    icon: <LinkSvg />,
    description: '링크',
  },
  github: {
    icon: <GithubSvg />,
    description: '깃허브',
  },
};
export type IconType = keyof typeof IconObj;

export const Anchor = ({ href, Icon }: PropsType) => {
  return (
    <Tooltip title={IconObj[Icon].description}>
      <Container target={'_blank'} href={href}>
        {IconObj[Icon].icon}
      </Container>
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
