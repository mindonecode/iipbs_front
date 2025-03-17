import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "import.meta.env.VITE_PORT": JSON.stringify(
          process.env.NEXT_PUBLIC_PORT,
        ),
        "import.meta.env.VITE_PROXY_HOST": JSON.stringify(
          process.env.NEXT_PUBLIC_PROXY_HOST,
        ),
        "import.meta.env.VITE_SERVER_API_URL": JSON.stringify(
          process.env.NEXT_PUBLIC_SERVER_API_URL,
        ),
        "import.meta.env.VITE_SITE_ID": JSON.stringify(process.env.SITE_ID),
        "import.meta.env.VITE_CLAIM_NAME": JSON.stringify(
          process.env.NEXT_PUBLIC_CLAIM_NAME,
        ),
        "import.meta.env.VITE_ACCESS_TOKEN": JSON.stringify(
          process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        ),
        "import.meta.env.VITE_REFRESH_TOKEN": JSON.stringify(
          process.env.NEXT_PUBLIC_REFRESH_TOKEN,
        ),
        "import.meta.env.VITE_AUTH_USER_ID": JSON.stringify(
          process.env.NEXT_PUBLIC_AUTH_USER_ID,
        ),
        "process.env.SITE_ID": JSON.stringify(process.env.NEXT_PUBLIC_SITE_ID),
      }),
    );

    return config;
  },
};

export default nextConfig;
