const withPreact = require('next-plugin-preact')

/** @type {import('next').NextConfig} */
module.exports = withPreact({
  reactStrictMode: true,
  // cleanDistDir: false,
  images: {
    domains: ['docker', 'admin.wordpress-demo.dew.vn'],
  },
})
