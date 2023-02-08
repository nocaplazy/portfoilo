import { Arrow, GithubSvg, LinkSvg } from '@/assets';
import { Button } from '@/components/common/Button';
import { Link } from '@/components/common/Link';
import { List } from '@/components/common/list';
import { TechnologyTag } from '@/components/common/technologyTag';
import { Text } from '@/components/common/Text';
import { Hr } from '@/components/Hr';
import { addtionalProjects, projects } from '@/constants/projects';
import { Column } from '@/layouts/Column';
import { FlexWrap } from '@/layouts/FlexWrap';
import { RowGap } from '@/layouts/RowGap';
import { Section } from '@/layouts/Section';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

export const ProjectDetail = () => {
  const Navigate = useNavigate();
  const { id: routeId } = useParams();
  const a = [...projects, ...addtionalProjects];
  return (
    <Column>
      <Button
        onClick={() => Navigate(-1)}
        margin="80px 0"
        Icon={<Arrow />}
        iconLocation="left"
      >
        뒤로가기
      </Button>
      <Hr />
      {a.map(
        ({
          id,
          title,
          tagList,
          thumnail,
          member,
          boxDes,
          serviceUrl,
          serviceAlt,
          githubAlt,
          githubUrl,
          feeling,
          situation,
          serviceDescription,
          role,
        }) => (
          <>
            {routeId === id && (
              <>
                <Text margin="50px 0 0 0" size="36px" weight="semiBold">
                  {title}
                </Text>
                <Text
                  margin="12px 0"
                  color="gray3"
                  size="20px"
                  weight="regular"
                >
                  {member || '개인 프로젝트'}
                </Text>
                <FlexWrap gap="15px">
                  {tagList.map((tag) => (
                    <TechnologyTag tag={tag} />
                  ))}
                </FlexWrap>
                <_Box>
                  <Text size="40px">🚀</Text>
                  <Text size="20px" weight="semiBold">
                    {boxDes}
                  </Text>
                </_Box>
                <img width={'100%'} src={thumnail} />
                {serviceUrl && serviceAlt && (
                  <Link href={serviceUrl} Icon={LinkSvg}>
                    {serviceAlt}
                  </Link>
                )}
                {githubAlt && githubUrl && (
                  <Link href={githubUrl} Icon={GithubSvg}>
                    {githubAlt}
                  </Link>
                )}
                <RowGap gap="90px" margin="0 0 230px 0">
                  {serviceDescription && (
                    <Section title="서비스 설명">{serviceDescription}</Section>
                  )}
                  {situation && (
                    <Section title="직면한 상황">{situation}</Section>
                  )}
                  {role && (
                    <Section title="맡은 역할">
                      <List listItem={role} />
                    </Section>
                  )}
                  {feeling && <Section title="느낀 점">{feeling}</Section>}
                </RowGap>
              </>
            )}
          </>
        )
      )}
    </Column>
  );
};

const _Box = styled.div`
  border: 2px solid ${({ theme }) => theme.color.gray2};
  padding: 29px 40px;
  display: flex;
  gap: 36px;
  align-items: center;
  white-space: pre-line;
  line-height: 32px;
  border-radius: 4px;
  margin: 30px 0;
`;
