import { ReactNode } from 'react';
import styled from 'styled-components';
import type { KeyOfColorType } from '../../styles/theme/color';
import type { KeyOfFontType } from '../../styles/theme/font';

interface PropsType extends WrapperType {
  children: ReactNode;
}

export const Text = ({
  width,
  color,
  weight,
  size,
  children,
  margin,
  lineHeight,
  display = 'block',
}: PropsType) => {
  return (
    <_Wrapper
      lineHeight={lineHeight}
      display={display}
      margin={margin}
      width={width}
      color={color}
      size={size}
      weight={weight}
    >
      {children}
    </_Wrapper>
  );
};

interface WrapperType {
  display?: 'inline' | 'block';
  lineHeight?: string;
  width?: string;
  color?: KeyOfColorType;
  weight?: KeyOfFontType;
  size?: string;
  margin?: string;
}

const _Wrapper = styled.div<WrapperType>`
  line-height: ${({ lineHeight }) => lineHeight};
  display: ${({ display }) => display};
  color: ${({ theme, color }) => theme.color[color]};
  width: ${({ width }) => width};
  ${({ theme, weight }) => theme.font[weight]};
  font-size: ${({ size }) => size};
  margin: ${({ margin }) => margin};
`;
