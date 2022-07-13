const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');

const nextConfig = {
  reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    }
}

module.exports = withPlugins([withImages, withFonts], nextConfig);