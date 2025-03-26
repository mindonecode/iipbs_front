export const styles = {
  base: require("./base.css"),
  diveicon: require("./diveicon.css"),
  grid: require("./grid.css"),
  components: require("./components.css"),
} as const;

export type StyleType = keyof typeof styles;
