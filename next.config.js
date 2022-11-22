const { join } = require('path');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = {
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        '@components': join(process.cwd(), 'src', 'components'),
        '@utils': join(process.cwd(), 'src', 'utils'),
        '@hooks': join(process.cwd(), 'src', 'hooks'),
        '@assets': join(process.cwd(), 'src', 'assets'),
        '@containers': join(process.cwd(), 'src', 'containers'),
        '@imports': join(process.cwd(), 'src', 'imports'),
        '@interfaces': join(process.cwd(), 'src', 'interfaces'),
        '@actions': join(process.cwd(), 'src', 'actions'),
        '@reducers': join(process.cwd(), 'src', 'reducers')
      },
    };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  ...nextConfig,
};
