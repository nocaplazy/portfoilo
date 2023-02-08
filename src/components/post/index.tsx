import { BlogType } from '@/constants/blogs';
import styled from 'styled-components';

export const Post = ({ title, href }: BlogType) => {
  return <_Wrapper href={href}>{title}</_Wrapper>;
};

const _Wrapper = styled.a`
  display: flex;
  align-items: center;
  padding-left: 40px;
  height: 75px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  ${({ theme }) => theme.font.semiBold}
  :hover {
    background-color: ${({ theme }) => theme.color.gray4};
  }
`;
