export const styles = {
  base: require("./base.css"),
  diveicon: require("./diveicon.css"),
} as const;

export type StyleType = keyof typeof styles;
