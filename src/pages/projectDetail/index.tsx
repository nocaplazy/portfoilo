import { Arrow } from '@/assets';
import { Button } from '@/components/Button';
import { _Text } from '@/components/Text';
import { Tag } from '@/constants/Icon';
import { addtionalProjects, projects } from '@/constants/projects';
import { Column } from '@/layouts/Column';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Anchor } from './Anchor';
import { Expandable } from './Expandable';
import { MinimumViableProduct } from './MinimumViableProduct';
import { Template } from './Template';

export const ProjectDetail = () => {
  const Navigate = useNavigate();
  const { id: routeId } = useParams();

  const {
    MVP,
    title,
    personnel,
    technologyStackList,
    anchor,
    thumnail,
    features,
  } = [...projects, ...addtionalProjects].find(({ id }) => id === routeId);

  return (
    <_Column>
      <Button onClick={() => Navigate(-1)} Icon={<Arrow />} iconLocation="left">
        뒤로가기
      </Button>
      <_Text size="36px" weight="semiBold">
        {title}
      </_Text>
      <_Text color="gray300" size="20px" weight="regular">
        {personnel}
      </_Text>
      <_FlexWrap>{technologyStackList.map((tag) => Tag[tag])}</_FlexWrap>
      <MinimumViableProduct description={MVP} />
      <img width={'100%'} src={thumnail} />

      <_LinkWrapper>
        {anchor &&
          anchor.map(({ url, alt, Icon }, idx) => (
            <Anchor key={idx} href={url} Icon={Icon}>
              {alt}
            </Anchor>
          ))}
      </_LinkWrapper>
      <Template title="기능">
        {features.map(({ summary, detail }, idx) => (
          <Expandable key={idx} title={summary}>
            {detail}
          </Expandable>
        ))}
      </Template>
      <Template title="당담역할">fqwqfw</Template>
    </_Column>
  );
};

const _LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const _Column = styled(Column)`
  margin: 100px auto;
`;

const _FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;
