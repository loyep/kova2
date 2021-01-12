/* eslint-disable */
const fs = require("fs")
const path = require("path")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const lessToJS = require("less-vars-to-js")

const withAntd = require("./build/with-antd")

const antdVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, "./assets/styles/antd-custom.less"), "utf8"))

module.exports = withBundleAnalyzer(
  withAntd({
    distDir: 'dist',
    cssModules: true,
    cssLoaderOptions: {
      sourceMap: false,
      importLoaders: 1,
      localIdentName: "[local]_[hash:4]",
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.join(__dirname, "src"),
      }
      return config
    },
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: antdVariables,
      },
    },
  }),
)
