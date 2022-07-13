const withPlugins = require('next-compose-plugins');


const nextConfig = {
  reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    }
}

module.exports = nextConfig;