import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "import.meta.env.VITE_SERVER_API_URL": JSON.stringify(
          process.env.VITE_SERVER_API_URL,
        ),
        "import.meta.env.VITE_SITE_ID": JSON.stringify(
          process.env.VITE_SITE_ID,
        ),
        "import.meta.env.VITE_CLAIM_NAME": JSON.stringify(
          process.env.VITE_CLAIM_NAME,
        ),
        "import.meta.env.VITE_ACCESS_TOKEN": JSON.stringify(
          process.env.VITE_ACCESS_TOKEN,
        ),
        "import.meta.env.VITE_REFRESH_TOKEN": JSON.stringify(
          process.env.VITE_REFRESH_TOKEN,
        ),
        "import.meta.env.VITE_TOKEN_ID": JSON.stringify(
          process.env.VITE_TOKEN_ID,
        ),
      }),
    );

    return config;
  },
};

export default nextConfig;
