import { _Text, _Point } from '@/components/Text';
import { List } from '@/components/List';
import { Column } from '@/layouts/Column';
import { listItem } from './constants';
import { HeaderWrapper } from '@/layouts/HeaderWrapper';
import styled from 'styled-components';
import { SectionList } from './sectionList';
import { Ending } from './Ending';
import { useInversion } from '@/hooks/useInversion';
import { Footer } from './Footer';

export const HomePage = () => {
  return (
    <HeaderWrapper>
      <Column>
        <_Title weight="semiBold" size="40px">
          끊임없이 도전하는
          <Point as={'div'}>FE 조상현</Point>
        </_Title>
        <_List listItem={listItem} />
        <SectionList />
        <Ending />
        <Footer />
      </Column>
    </HeaderWrapper>
  );
};

const Point = styled(_Point)`
  font-size: 40px;
  margin-top: 5px;
`;

const _Title = styled(_Text)`
  margin: 180px 0 65px 0;
  width: 365px;
`;

const _List = styled(List)`
  margin: 0 0 184px 0;
`;
