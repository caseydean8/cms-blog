/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHCMS_ENDPOINT:process.env.GRAPHCMS_ENDPOINT
  }
}
