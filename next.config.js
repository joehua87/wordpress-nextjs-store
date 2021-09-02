const withPreact = require('next-plugin-preact')

/** @type {import('next').NextConfig} */
module.exports = withPreact({
  reactStrictMode: true,
  images: {
    domains: ['docker'],
  },
})
