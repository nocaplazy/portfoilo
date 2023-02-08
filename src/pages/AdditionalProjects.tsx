import { Arrow } from '@/assets';
import { Button } from '@/components/common/Button';
import { Project } from '@/components/project';
import { Column } from '@/layouts/Column';
import { Section } from '@/layouts/Section';
import { useNavigate } from 'react-router-dom';
import { addtionalProjects } from '@/constants/projects';
import { SpaceBetween } from '@/layouts/SpaceBetween';

export const AdditionalProjects = () => {
  const Navigate = useNavigate();
  return (
    <Column>
      <Button
        onClick={() => Navigate(-1)}
        margin="80px 0"
        iconLocation="left"
        Icon={<Arrow />}
      >
        뒤로가기
      </Button>
      <Section
        title="추가적인 프로젝트"
        description="추가적인 프로젝트들이에요."
      >
        <SpaceBetween>
          {addtionalProjects.map(
            ({ id, title, description, tagList, thumnail }) => (
              <Project
                thumnail={thumnail}
                key={id}
                id={id}
                title={title}
                description={description}
                tagList={tagList}
              />
            )
          )}
        </SpaceBetween>
      </Section>
    </Column>
  );
};
