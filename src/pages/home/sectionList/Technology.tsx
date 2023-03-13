import { List } from '@/components/List';
import { _Text } from '@/components/Text';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface PropsType {
  title: string;
  description: string[];
}

export const Technology = ({ title, description }: PropsType) => {
  return (
    <div>
      <_Title weight="medium" size="24px">
        {title}
      </_Title>
      <List
        listItem={description.map((des) => (
          <_Text size="20px" weight="light">
            {des}
          </_Text>
        ))}
      />
    </div>
  );
};

const _Title = styled(_Text)`
  margin-bottom: 29px;
`;
