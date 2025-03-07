import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.SERVER_API_URL": JSON.stringify(
          process.env.NEXT_PUBLIC_SERVER_API_URL,
        ),
        "process.env.SITE_ID": JSON.stringify(process.env.NEXT_PUBLIC_SITE_ID),
      }),
    );

    return config;
  },
};

export default nextConfig;
