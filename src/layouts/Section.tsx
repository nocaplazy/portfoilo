import styled from 'styled-components';
import { ReactNode } from 'react';
import { Text } from '@/components/common/Text';

interface PropsType {
  title: string;
  description?: string;
  children: ReactNode;
}

export const Section = ({ title, description, children }: PropsType) => {
  return (
    <_Wrapper>
      <Text size="36px" weight="semiBold">
        {title}
      </Text>
      {description && (
        <Text color="gray3" margin="15px 0 45px 0" size="20px" weight="regular">
          {description}
        </Text>
      )}
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  border-top: 4px solid ${({ theme }) => theme.color.gray2};
  padding-top: 90px;
`;
