export const images = {
  logo: require("./logo.png"),
  menuBtn: require("./mob_menuBtn.svg"),
} as const;

export type ImageType = keyof typeof images;
