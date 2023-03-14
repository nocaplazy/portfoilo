import { addtionalProjects, projects } from '@/constants/projects';
import { Anchor } from '@/pages/projectDetail/Anchor';
import { Expandable } from '@/pages/projectDetail/Expandable';
import { MinimumViableProduct } from '@/pages/projectDetail/MinimumViableProduct';
import { Template } from '@/pages/projectDetail/Template';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { _Text } from '@/components/Text';
import { Tag } from '@/constants/Icon';
import ReactOutsideClickHandler from 'react-outside-click-handler';
import { useEffect } from 'react';
import { Tooltip } from './ToolTip';

interface PropsType {
  handleCloseModal: () => void;
  id: string;
}

export const ProjectDetailModal = ({
  handleCloseModal,
  id: routeId,
}: PropsType) => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = 'auto';
    };
  }, []);

  const navigate = useNavigate();
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
    <ModalContainer>
      <ReactOutsideClickHandler onOutsideClick={handleCloseModal}>
        <ModalContent>
          <_Text size="36px" weight="semiBold">
            {title}
          </_Text>
          <_Text color="gray300" size="20px" weight="regular">
            {personnel}
          </_Text>
          <_FlexWrap>
            {technologyStackList.map((tag) => (
              <Tooltip title={tag}>{Tag[tag]}</Tooltip>
            ))}
          </_FlexWrap>
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
        </ModalContent>
      </ReactOutsideClickHandler>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  overflow-y: auto;
  z-index: 2;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 900px;
  margin-bottom: 200px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const _LinkWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const _FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;
