import { ReactNode } from 'react';
import styled from 'styled-components';
import type { KeyOfColorType } from '../styles/theme/color';
import type { KeyOfFontType } from '../styles/theme/font';

interface WrapperType {
  color?: KeyOfColorType;
  weight?: KeyOfFontType;
  size?: string;
}

export const _Text = styled.div<WrapperType>`
  color: ${({ theme, color }) => theme.color[color]};
  ${({ theme, weight }) => theme.font[weight]};
  font-size: ${({ size }) => size};
`;

export const _Point = styled.span<{ size?: 'big' }>`
  color: ${({ theme }) => theme.color.point};
  ${({ theme }) => theme.font.semiBold};
  font-size: 24px;
`;
