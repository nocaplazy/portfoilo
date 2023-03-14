import { Arrow } from '@/assets';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { addtionalProjects } from '@/constants/projects';
import { useInversion } from '@/hooks/useInversion';
import { Column } from '@/layouts/Column';
import { Section } from '@/layouts/Section';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalProjects = () => {
  const Navigate = useNavigate();
  return (
    <Column>
      <_Button
        onClick={() => Navigate(-1)}
        Icon={<Arrow />}
        iconLocation="left"
      >
        뒤로가기
      </_Button>
      <Section
        title="추가적인 프로젝트"
        description="추가적인 프로젝트들이에요."
      >
        <_SpaceBetween>
          {addtionalProjects.map((addtionalProject, idx) => (
            <ProjectCard key={idx} {...addtionalProject} />
          ))}
        </_SpaceBetween>
      </Section>
    </Column>
  );
};

const _Button = styled(Button)`
  height: 40px;
  position: sticky;
  top: 10px;
  background-color: #fff;
  z-index: 1;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.color.gray200};
`;

const _SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
