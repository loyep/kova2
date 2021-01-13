import App from 'next/app'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { generateTitle } from '@/utils'
import type { KovaPage, PageProps } from '@/lib/page'
// import { wrapper } from '@/store'
import { Fragment } from 'react'
// import { END } from 'redux-saga'
import { checkAuth } from '@/lib/auth'
import '@/assets/styles/index.less'

interface KovaAppProps extends AppInitialProps, AppProps {
  Component: KovaPage<PageProps>
}

if (typeof window !== 'undefined') {
  console.log(
    '\n' + ' %c Kova Designed by loyep® %c https://www.loyep.com ' + '\n',
    'color: #fadfa3; background: #030307; padding:5px 0; font-size:12px;',
    'background: #fadfa3; padding:5px 0; font-size:12px;',
  )
}

class KovaApp extends App<KovaAppProps> {
  static getInitialProps = async ({ Component, ctx }: AppContext) => {
    const req = ctx.req
    if (req) await checkAuth(req)

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : Component.defaultProps || {}
    // if (req) {
    //   ctx.store.dispatch(END)
    // }

    return {
      pageProps,
    }
  }

  componentDidMount() {
    //
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
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{generateTitle(title)}</title>
          {description && <meta name="description" content={description} />}
        </Head>
        <Layout {...layoutProps}>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

// const WrappedApp: any = wrapper.withRedux(KovaApp)

// WrappedApp.origGetInitialProps = WrappedApp.getInitialProps
KovaApp.origGetInitialProps = KovaApp.getInitialProps

// export default WrappedApp
export default KovaApp
