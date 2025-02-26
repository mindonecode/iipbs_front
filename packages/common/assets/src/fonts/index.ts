export const fonts = {
  // 예시: pretendard: require('./Pretendard-Regular.woff2'),
} as const;

export type FontType = keyof typeof fonts;
