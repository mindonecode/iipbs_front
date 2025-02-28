export const styles = {
  base: require("./base.css"),
  diveicon: require("./diveicon.css"),
  grid: require("./grid.css"),
} as const;

export type StyleType = keyof typeof styles;
