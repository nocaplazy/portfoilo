import { endingImg } from '@/assets';
import styled from 'styled-components';

export const Ending = () => {
  return (
    <_Center>
      <img loading="lazy" width={'855.5px'} src={endingImg} />
    </_Center>
  );
};

const _Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px 0;
`;
