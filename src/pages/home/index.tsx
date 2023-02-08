import { Text } from '@/components/common/Text';
import { List } from '@/components/common/list';
import { Column } from '@/layouts/Column';
import { RowGap } from '@/layouts/RowGap';
import { Section } from '@/layouts/Section';
import { listItem } from './constants';
import { Skill } from '@/components/skill';
import { Post } from '@/components/post';
import { Project } from '@/components/project';
import { SpaceBetween } from '@/layouts/SpaceBetween';
import { endingImg } from '@/assets/imgs';
import { Center } from '@/layouts/Center';
import { Button } from '@/components/common/Button';
import { CircleArrow } from '@/assets';
import { useNavigate } from 'react-router-dom';
import { HeaderWrapper } from '@/layouts/HeaderWrapper';
import { Hr } from '@/components/Hr';
import { blogs } from '@/constants/blogs';
import { projects } from '@/constants/projects';
import { technologys } from '@/constants/technology';

export const HomePage = () => {
  const navigate = useNavigate();
  const additionalProjects = () => {
    navigate('/project/more');
  };
  return (
    <HeaderWrapper>
      <Column>
        <Text
          lineHeight="60px"
          margin="180px 0 65px 0"
          width="365px"
          weight="semiBold"
          size="40px"
        >
          도전을 두려워하지 않는
          <Text color="point">FE 조상현</Text>
        </Text>
        <List margin="0 0 184px 0" listItem={listItem} />
        <RowGap gap="90px">
          <Section title="skills" description="제가 즐겨쓰는 기술이에요">
            <RowGap gap="45px">
              {technologys.map(({ title, description }) => (
                <Skill listItem={description} title={title} />
              ))}
            </RowGap>
          </Section>
          <Section title="blogs" description="저를 대표하는 아티클이에요">
            <RowGap gap="28px">
              {blogs.map(({ title, href }) => (
                <Post href={href} title={title} />
              ))}
            </RowGap>
          </Section>
          <Section title="projects" description="저를 대표하는 프로젝트입니다">
            <SpaceBetween>
              {projects.map(({ id, title, description, tagList, thumnail }) => (
                <Project
                  thumnail={thumnail}
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  tagList={tagList}
                />
              ))}
            </SpaceBetween>
            <Button
              onClick={additionalProjects}
              margin="0 0 90px 0"
              Icon={<CircleArrow />}
            >
              추가적인 프로젝트 보기
            </Button>
          </Section>
        </RowGap>
        <Hr />
        <Center margin="280px 0 280px 0">
          <img src={endingImg} />
        </Center>
      </Column>
    </HeaderWrapper>
  );
};
