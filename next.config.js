/* eslint-disable */
const fs = require("fs")
const path = require("path")
const lessToJS = require("less-vars-to-js")
const withAntd = require("./scripts/with-antd")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const antdVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, "./styles/antd.less"), "utf8"))

module.exports = withBundleAnalyzer(
  withAntd({
    distDir: 'dist',
    cssModules: true,
    cssLoaderOptions: {
      sourceMap: false,
      importLoaders: 1,
      camelCase: true,
      localIdentName: "[local]_[hash:4]",
    },
    // webpack: config => config,
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: antdVariables,
      },
    },
  }),
)
