import { List } from '../common/list';
import { Text } from '../common/Text';
import { ReactNode } from 'react';

interface PropsType {
  listItem: ReactNode[];
  title: string;
}

export const Skill = ({ listItem, title }: PropsType) => {
  return (
    <div>
      <Text margin="0 0 20px 0" weight="medium" size="24px">
        {title}
      </Text>
      <List listItem={listItem} />
    </div>
  );
};
