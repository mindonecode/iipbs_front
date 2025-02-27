export const fonts = {
  diveiconEot: require("./diveicon.eot"),
  diveiconTtf: require("./diveicon.ttf"),
  diveiconWoff: require("./diveicon.woff"),
  diveiconSvg: require("./diveicon.svg"),
} as const;

export type FontType = keyof typeof fonts;
