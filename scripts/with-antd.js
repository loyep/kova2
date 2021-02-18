/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
const cssLoaderConfig = require("@zeit/next-css/css-loader-config")
const webpack = require("webpack")

const FilterWarningsPlugin = require("webpack-filter-warnings-plugin")
// const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin")

// fix: prevents error when .less files are required by nodeya
if (typeof require !== "undefined") require.extensions[".less"] = () => {}

const ANTD_STYLE_REGX = /antd\/.*?\/style.*?/

module.exports = (nextConfig) => ({
  ...nextConfig,
  ...{
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade",
        )
      }

      const { dev, isServer } = options
      const { cssModules, cssLoaderOptions, postcssLoaderOptions, lessLoaderOptions = {} } = nextConfig

      // https://github.com/zeit/next.js/issues/2734
      config.node = {
        fs: "empty",
      }

      // PLUGINS
      config.plugins.push(
        new FilterWarningsPlugin({
          // ignore ANTD chunk styles [mini-css-extract-plugin] warning
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
      )

      config.plugins.push(
        new webpack.ContextReplacementPlugin(
          // Restrict MomentJS locale to english
          /moment[/\\]locale$/,
          /en/,
        ),
      )

      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      // config.plugins.push(new AntdDayjsWebpackPlugin()) // 默认不引用momentjs，减小antd打包体积

      // for all less in clint
      const baseLessConfig = {
        extensions: ["less"],
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          {
            loader: "less-loader",
            options: lessLoaderOptions,
          },
        ],
      }

      config.module.rules.push({
        test: /\.less$/,
        exclude: /node_modules/,
        use: cssLoaderConfig(config, baseLessConfig),
      })

      // for antd less in client
      config.module.rules.push({
        test: /\.less$/,
        include: /node_modules/,
        use: cssLoaderConfig(config, {
          ...baseLessConfig,
          cssModules: false,
          cssLoaderOptions: {},
          postcssLoaderOptions: {},
        }),
      })

      // for antd less in server (yarn build)
      if (isServer) {
        const rawExternals = [...config.externals]

        config.externals = [
          (context, request, callback) => {
            if (request.match(ANTD_STYLE_REGX)) {
              return callback()
            }

            if (typeof rawExternals[0] === "function") {
              rawExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof rawExternals[0] === "function" ? [] : rawExternals),
        ]

        config.module.rules.unshift({
          test: ANTD_STYLE_REGX,
          use: ["null-loader"],
        })
      }

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  },
})
