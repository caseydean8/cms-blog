/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
    REACT_APP_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    REACT_APP_PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
  },
};
