import styled from 'styled-components';

export const Hr = () => {
  return <_Hr />;
};

const _Hr = styled.hr`
  border: 2px solid ${({ theme }) => theme.color.gray2};
`;
