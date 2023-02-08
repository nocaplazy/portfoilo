import { ProjectType } from '@/constants/projects';
import { FlexWrap } from '@/layouts/FlexWrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TechnologyTag } from '../common/technologyTag';
import { Text } from '../common/Text';

export const Project = ({
  thumnail,
  id,
  title,
  description,
  tagList,
}: ProjectType) => {
  const navigate = useNavigate();
  return (
    <_Wrapper onClick={() => navigate(`/project/${id}`)}>
      <_ProjectImg>
        <img src={thumnail} />
      </_ProjectImg>
      <Text margin="40px 0 15px 0" size="24px" weight="medium">
        {title}
      </Text>
      <Text margin="0 0 30px 0" weight="regular" size="20px" color="gray3">
        {description}
      </Text>
      <FlexWrap gap="15px">
        {tagList.map((tag, idx) => (
          <TechnologyTag key={idx} tag={tag} />
        ))}
      </FlexWrap>
    </_Wrapper>
  );
};

const _Wrapper = styled.article`
  position: relative;
  width: 515px;
  height: 600px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.surface};
  padding: 260px 50px 0 50px;
  margin-bottom: 90px;
  cursor: pointer;
`;

const _ProjectImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  > img {
    border-radius: 8px 8px 0px 0px;
    object-fit: cover;
    max-height: 260px;
  }
`;
