const { extend } = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const baseConfig = (phase, { defaultConfig }) => {
  return {
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    poweredByHeader: false,
    reactStrictMode: true,
    trailingSlash: false,
    webpack: (config, { isServer }) => {
      // config.resolve.alias = {}
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: "json",
        use: 'yaml-loader'
      })
      return config
    }
  }
}

module.exports = extend(baseConfig).withPlugins([
  [withBundleAnalyzer]
])