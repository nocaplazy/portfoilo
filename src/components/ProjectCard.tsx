import { ProjectType } from '@/constants/projects';
import { _Text } from '@/components/Text';
import styled from 'styled-components';
import { Tag } from '@/constants/Icon';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ModalPortal } from './ModalPortal';
import { useInversion } from '@/hooks/useInversion';
import { Tooltip } from './ToolTip';

export const ProjectCard = ({
  id,
  thumnail,
  MVP,
  title,
  technologyStackList,
}: ProjectType) => {
  const {
    state: showModal,
    correctState: handleOpenModal,
    incorrectState: handleCloseModal,
  } = useInversion();

  return (
    <_Project onClick={handleOpenModal}>
      <_ProjectImg>
        <img src={thumnail} />
      </_ProjectImg>
      <_Title size="24px" weight="medium">
        {title}
      </_Title>
      <_Text color="gray300" size="20px" weight="regular">
        {MVP}
      </_Text>
      <_FlexWrap>
        {technologyStackList.map((tag) => (
          <Tooltip title={tag}>{Tag[tag]}</Tooltip>
        ))}
      </_FlexWrap>
      {showModal && (
        <ModalPortal>
          <ProjectDetailModal id={id} handleCloseModal={handleCloseModal} />
        </ModalPortal>
      )}
    </_Project>
  );
};

const _Title = styled(_Text)`
  margin: 40px 0 20px 0;
`;

const _Project = styled.article`
  position: relative;
  width: 500px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 260px 50px 0 50px;
  margin-bottom: 90px;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
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
    width: 100%;
  }
`;

const _FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;
