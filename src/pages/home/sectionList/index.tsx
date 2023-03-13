import { Button } from '@/components/Button';
import { blogs } from '@/constants/blogs';
import { technologys } from '@/constants/technology';
import { Section } from '@/layouts/Section';
import styled from 'styled-components';
import { _Text } from '@/components/Text';
import { projects } from '@/constants/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { CircleArrow } from '@/assets';
import { useNavigate } from 'react-router-dom';
import { Technology } from './Technology';

export const SectionList = () => {
  const navigate = useNavigate();
  const additionalProjects = () => {
    navigate('/project/more');
  };
  return (
    <_SectionWrapper>
      <Section
        id="projects"
        title="projects"
        description="저를 대표하는 프로젝트입니다"
      >
        <_SpaceBetween>
          {projects.map((project) => (
            <ProjectCard {...project} />
          ))}
        </_SpaceBetween>
        <_Button onClick={additionalProjects} Icon={<CircleArrow />}>
          추가적인 프로젝트 보기
        </_Button>
      </Section>
      <Section
        id="blogs"
        title="blogs"
        description="저를 대표하는 아티클이에요"
      >
        <_RowGap gap="28px">
          {blogs.map(({ title, href }) => (
            <_Post target={'_blank'} href={href}>
              {title}
            </_Post>
          ))}
        </_RowGap>
      </Section>
      <Section
        id="skills"
        title="skills"
        description="제가 즐겨쓰는 기술이에요"
      >
        <_RowGap gap="45px">
          {technologys.map((technology) => (
            <Technology {...technology} />
          ))}
        </_RowGap>
      </Section>
    </_SectionWrapper>
  );
};

const _SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

const _RowGap = styled.div<{ gap?: string; margin?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;

const _Button = styled(Button)`
  margin: 0 0 90px 0;
`;

const _Post = styled.a`
  display: flex;
  align-items: center;
  padding-left: 40px;
  height: 75px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  ${({ theme }) => theme.font.semiBold}
  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;

const _SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
