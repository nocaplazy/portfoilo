import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

interface PropsType {
  hideHeader: boolean;
}

const navigationList = [
  { id: 'body', text: '자기소개' },
  { id: '#projects', text: '프로젝트' },
  { id: '#blogs', text: '블로그글' },
  { id: '#skills', text: '기술스택' },
  { id: '#activitys', text: '활동' },
];

const isCurrentScrolled = (position: number, idx: number) => {
  if (680 > position && idx === 0) {
    return true;
  }
  if (1870 > position && position > 680 && idx === 1) {
    return true;
  }
  if (2470 > position && position > 1870 && idx === 2) {
    return true;
  }
  if (3460 > position && position > 2470 && idx === 3) {
    return true;
  }
  if (position > 3460 && idx === 4) {
    return true;
  }
};

export const Header = ({ hideHeader }: PropsType) => {
  const [position, setPosition] = useState<number>(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <_Wrapper hideHeader={hideHeader}>
        <nav>
          <ul>
            {navigationList.map((navItem, idx) => (
              <_NavigationItem
                key={idx}
                onClick={() =>
                  document
                    .querySelector(navItem.id)
                    .scrollIntoView({ behavior: 'smooth' })
                }
                isPoint={isCurrentScrolled(position, idx)}
              >
                {navItem.text}
              </_NavigationItem>
            ))}
          </ul>
        </nav>
      </_Wrapper>
      <_Fill />
    </>
  );
};

const _NavigationItem = styled.li<{ isPoint: boolean }>`
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme, isPoint }) => isPoint && theme.color.point};
  font-weight: ${({ theme, isPoint }) => isPoint && theme.font.semiBold};
  :hover {
    opacity: 0.6;
  }
`;

const _Wrapper = styled.header<{ hideHeader: boolean }>`
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  /* top: ${({ hideHeader }) => (hideHeader ? -78 : 0)}px; */
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  ${({ hideHeader }) =>
    hideHeader &&
    css`
      height: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.11);
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(20px);
    `}
  will-change: background-color, height, border-bottom;
  transition: background 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s,
    height 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s,
    border 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s;
  > nav {
    width: 1112px;
    > ul {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const _Fill = styled.div`
  padding-top: 70px;
`;
