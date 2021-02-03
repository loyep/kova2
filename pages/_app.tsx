import App from 'next/app'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import Progress from '@/components/Progress'
import { generateTitle } from '@/utils'
import type { KovaPage } from '@/components/Kova'
import { wrapper } from '@/store'
import { Fragment } from 'react'
import { checkAuth } from '@/lib/auth'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
import '@/styles/index.less'

interface KovaAppProps extends AppInitialProps, AppProps {
  Component: KovaPage
}

type KovaAppContext = AppContext

class KovaApp extends App<KovaAppProps> {
  static getInitialProps = async ({ Component, ctx }: KovaAppContext) => {
    const { req } = ctx
    if (req) await checkAuth(req)

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : Component.defaultProps || {}

    return {
      pageProps,
    }
  }

  render() {
    const { pageProps, Component } = this.props
    const { title, description } = pageProps
    const Layout = Component.layoutProps?.Layout || Fragment
    const layoutProps = Component.layoutProps?.Layout ? { layoutProps: Component.layoutProps } : {}
    // const meta = Component.layoutProps?.meta || {}

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{generateTitle(title)}</title>
          {description && <meta name="description" content={description} />}
        </Head>
        <ConfigProvider locale={zhCN}>
          <Layout {...layoutProps}>
            <Component {...pageProps} />
          </Layout>
          <Progress />
        </ConfigProvider>
      </>
    )
  }
}

const WrappedApp: any = wrapper.withRedux(KovaApp)

WrappedApp.origGetInitialProps = WrappedApp.getInitialProps

export default WrappedApp
