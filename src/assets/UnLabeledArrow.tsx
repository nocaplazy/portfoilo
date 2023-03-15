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
      <g clip-path="url(#clip0_14726_27659)">
        <g filter="url(#filter0_d_14726_27659)">
          <path
            d="M13.3123 4.35137L25.9498 16.9514C26.0998 17.1014 26.2058 17.2639 26.2678 17.4389C26.3308 17.6139 26.3623 17.8014 26.3623 18.0014C26.3623 18.2014 26.3308 18.3889 26.2678 18.5639C26.2058 18.7389 26.0998 18.9014 25.9498 19.0514L13.3123 31.6889C12.9623 32.0389 12.5248 32.2139 11.9998 32.2139C11.4748 32.2139 11.0248 32.0264 10.6498 31.6514C10.2748 31.2764 10.0873 30.8389 10.0873 30.3389C10.0873 29.8389 10.2748 29.4014 10.6498 29.0264L21.6748 18.0014L10.6498 6.97637C10.2998 6.62637 10.1248 6.19537 10.1248 5.68337C10.1248 5.17037 10.3123 4.72637 10.6873 4.35137C11.0623 3.97637 11.4998 3.78887 11.9998 3.78887C12.4998 3.78887 12.9373 3.97637 13.3123 4.35137Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_14726_27659"
          x="0.0869141"
          y="-6.21094"
          width="36.2754"
          height="48.4248"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_14726_27659"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14726_27659"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_14726_27659">
          <rect
            width="36"
            height="36"
            fill="white"
            transform="matrix(-1 0 0 -1 36 36.001)"
          />
        </clipPath>
      </defs>
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
  > path {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
