export const color = {
  point: '#FF6F0F',
  gray25: '#FCFCFD',
  gray50: '#F9FAFB',
  gray100: '#F2F4F7',
  gray200: '#E4E7EC',
  gray300: '#D0D5DD',
  gray400: '#98A2B3',
  gray500: '#667085',
  gray600: '#475467',
  gray700: '#344054',
  gray800: '#1D2939',
  gray900: '#101828',
} as const;

export type KeyOfColorType = keyof typeof color;
