export const icons = {
  // 예시: close: require('./close.svg'),
} as const;

export type IconType = keyof typeof icons;
