/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

/*
const withPWA = require("next-pwa")({
  dest: "public",
});
*/
module.exports = {
  reactStrictMode: true,
  i18n
}
