import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { generateTitle } from '@/utils'
import { KovaPage, PageProps } from '@/lib/page'
import { wrapper } from '@/store'
import React from 'react'
import { END } from 'redux-saga'
import { checkAuth } from '@/lib/auth'
import '@/assets/styles/index.less'

interface KovaAppProps extends AppInitialProps, AppProps {}

if (typeof window !== 'undefined') {
  console.log(
    '\n' + ' %c Kova Designed by loyep® %c https://www.loyep.com ' + '\n',
    'color: #fadfa3; background: #030307; padding:5px 0; font-size:12px;',
    'background: #fadfa3; padding:5px 0; font-size:12px;',
  )
}

const getInitialProps = async ({ Component, ctx }: AppContext) => {
  const req = ctx.req
  if (req) await checkAuth(req)

  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : Component.defaultProps || {}
  if (req) {
    ctx.store.dispatch(END)
  }

  return {
    pageProps,
  }
}

class KovaApp extends App<KovaAppProps> {
  static getInitialProps = getInitialProps

  componentDidMount() {
    //
  }

  render() {
    const { pageProps } = this.props
    const Component = this.props.Component as KovaPage<PageProps>
    const { title, description } = pageProps
    const Layout = Component.layoutProps?.Layout || React.Fragment
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

const WrappedApp: any = wrapper.withRedux(KovaApp)

WrappedApp.origGetInitialProps = WrappedApp.getInitialProps

export default WrappedApp
