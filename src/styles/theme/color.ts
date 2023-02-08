export const color = {
  point: '#FF6F0F',
  gray1: '#d9d9d9',
  gray2: '#EDEDED',
  gray3: '#9d9d9d',
  gray4: '#f2f4f6',
} as const;

export type KeyOfColorType = keyof typeof color;
