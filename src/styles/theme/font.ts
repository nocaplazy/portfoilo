const pretendard = (weight: number) => {
  return `
        font-family: "Pretendard";
        font-weight: ${weight};
    `;
};

export const font = {
  semiBold: pretendard(600),
  medium: pretendard(500),
  regular: pretendard(400),
  light: pretendard(300),
};

export type KeyOfFontType = keyof typeof font;
