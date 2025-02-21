declare const process: {
  env: {
    BASE_ASSETS_PATH?: string;
  };
};

export const BASE_ASSETS_PATH = process.env.BASE_ASSETS_PATH;
