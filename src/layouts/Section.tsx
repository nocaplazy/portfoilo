import styled from 'styled-components';
import { ReactNode } from 'react';
import { _Text } from '@/components/Text';

interface PropsType {
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
}

export const Section = ({ title, description, children, id }: PropsType) => {
  return (
    <_Wrapper id={id}>
      <_Text size="36px" weight="semiBold">
        {title}
      </_Text>
      {description && (
        <_Description color="gray300" size="20px" weight="regular">
          {description}
        </_Description>
      )}
      {children}
    </_Wrapper>
  );
};

const _Description = styled(_Text)`
  margin: 19px 0 45px 0;
`;

const _Wrapper = styled.section`
  border-top: 4px solid ${({ theme }) => theme.color.gray200};
  padding-top: 90px;
  :last-child {
    padding-bottom: 90px;
    border-bottom: 4px solid ${({ theme }) => theme.color.gray200};
  }
`;
