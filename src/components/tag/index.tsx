import styled from 'styled-components';
import { iconSwitch } from './icon';

export type TagType = 'react' | 'typescript' | 'webpack';

interface PropsType {
  tag: TagType;
}

export const TechnologyTag = ({ tag }: PropsType) => {
  const { stroke, Icon } = iconSwitch(tag);
  return (
    <_Wrapper stroke={stroke}>
      <Icon />
      {tag}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ stroke: string }>`
  border: 2px solid ${({ stroke }) => stroke};
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 9px;
  border-radius: 4px;
`;
