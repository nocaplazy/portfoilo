import styled from 'styled-components';

interface PropsType {
  hideHeader: boolean;
}

export const Header = ({ hideHeader }: PropsType) => {
  return (
    <>
      <_Wrapper hideHeader={hideHeader}>
        <nav>
          <ul>
            <li>자기소개</li>
            <li>기술스택</li>
            <li>블로그글</li>
            <li>프로젝트</li>
          </ul>
        </nav>
      </_Wrapper>
      <_Fill />
    </>
  );
};

const _Wrapper = styled.header<{ hideHeader: boolean }>`
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  transition: 0.3s;
  top: ${({ hideHeader }) => (hideHeader ? -78 : 0)}px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.headerShadow};
  > nav {
    width: 1112px;
    > ul {
      display: flex;
      justify-content: space-between;
      > li {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`;

const _Fill = styled.div`
  padding-top: 70px;
`;
