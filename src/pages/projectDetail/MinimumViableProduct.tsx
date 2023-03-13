import { _Text } from '@/components/Text';
import styled from 'styled-components';

interface PropsType {
  description: string;
}

export const MinimumViableProduct = ({ description }: PropsType) => {
  return (
    <_Box>
      <_Text size="40px">🚀</_Text>
      <_Text size="20px" weight="semiBold">
        {description}
      </_Text>
    </_Box>
  );
};

const _Box = styled.div`
  border: 2px solid ${({ theme }) => theme.color.gray200};
  padding: 29px 40px;
  display: flex;
  gap: 36px;
  align-items: center;
  white-space: pre-line;
  line-height: 32px;
  border-radius: 4px;
  margin: 30px 0;
`;
