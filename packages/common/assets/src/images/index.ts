export const images = {
  logo: require("./logo.png"),
  menuBtn: require("./mob_menuBtn.svg"),
  menuBtnClose: require("./mob_menuBtn_close.svg"),
  iconFolderOff: require("./icon_folder_off.png"),
  iconFolderOn: require("./icon_folder_on.png"),
  iconFile: require("./icon_file.png"),
} as const;

export type ImageType = keyof typeof images;
