import styled, { css } from 'styled-components';

interface PropsType {
  direction?: 'left' | 'top' | 'bottom' | 'right';
}

export const UnLabeledArrow = ({ direction }: PropsType) => {
  return (
    <_Svg
      direction={direction}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M10.7246 31.65C10.3496 31.275 10.1621 30.831 10.1621 30.318C10.1621 29.806 10.3496 29.3625 10.7246 28.9875L21.7121 18L10.6871 6.975C10.3371 6.625 10.1621 6.1875 10.1621 5.6625C10.1621 5.1375 10.3496 4.6875 10.7246 4.3125C11.0996 3.9375 11.5436 3.75 12.0566 3.75C12.5686 3.75 13.0121 3.9375 13.3871 4.3125L25.9871 16.95C26.1371 17.1 26.2436 17.2625 26.3066 17.4375C26.3686 17.6125 26.3996 17.8 26.3996 18C26.3996 18.2 26.3686 18.3875 26.3066 18.5625C26.2436 18.7375 26.1371 18.9 25.9871 19.05L13.3496 31.6875C12.9996 32.0375 12.5686 32.2125 12.0566 32.2125C11.5436 32.2125 11.0996 32.025 10.7246 31.65Z"
        fill="white"
      />
    </_Svg>
  );
};

const _Svg = styled.svg<PropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ direction }) =>
    css`rotate(${
      {
        top: 270,
        right: 0,
        bottom: 90,
        left: 180,
      }[direction]
    }deg)`};
`;
