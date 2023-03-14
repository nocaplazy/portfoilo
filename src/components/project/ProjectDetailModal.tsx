import { addtionalProjects, projects } from '@/constants/projects';
import { Anchor } from '@/components/project/Anchor';
import { Expandable } from '@/components/project/Expandable';
import { MinimumViableProduct } from '@/components/project/MinimumViableProduct';
import { Template } from '@/components/project/Template';
import styled from 'styled-components';
import { _Text } from '@/components/Text';
import { Tag } from '@/constants/Icon';
import { useEffect } from 'react';
import { Tooltip } from '../ToolTip';
import { Close } from '@/assets/svgs/Close';

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
    <ModalContainer
      onClick={(e) => {
        e.stopPropagation();
        handleCloseModal();
      }}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <_Header>
          <_Text size="36px" weight="semiBold">
            {title}
          </_Text>
          <_Close onClick={handleCloseModal} />
        </_Header>
        <_Text color="gray300" size="20px" weight="regular">
          {personnel}
        </_Text>
        <_FlexWrap>
          <_IconWrapper>
            {technologyStackList.map((tag, idx) => (
              <Tooltip key={idx} title={tag}>
                {Tag[tag]}
              </Tooltip>
            ))}
          </_IconWrapper>
          <_LinkWrapper>
            {anchor &&
              anchor.map(({ url, alt, Icon }, idx) => (
                <Anchor key={idx} href={url} Icon={Icon} />
              ))}
          </_LinkWrapper>
        </_FlexWrap>
        <MinimumViableProduct description={MVP} />
        <img width={'100%'} src={thumnail} />
        <Template title="기능">
          {features.map(({ summary, detail }, idx) => (
            <Expandable key={idx} title={summary}>
              {detail}
            </Expandable>
          ))}
        </Template>
        <Template title="당담역할">fqwqfw</Template>
      </ModalContent>
    </ModalContainer>
  );
};

const _Close = styled(Close)`
  cursor: pointer;
  border-radius: 70%;
  padding: 8px;
  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
  :active {
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;

const _Header = styled.header`
  position: sticky;
  height: 60px;
  background-color: #fff;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.color.gray200};
  padding: 10px 0;
`;

const _IconWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  overflow-y: scroll;
  z-index: 2;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 900px;
  margin: 100px auto;
  padding: 60px 40px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const _LinkWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const _FlexWrap = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;
