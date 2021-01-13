import Document, { Html, Head, Main, DocumentContext } from 'next/document'
import { KovaScript } from '@/components/Kova'

export default class KovaDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/fonts/iconfont/iconfont.css" as="style" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
        </Head>
        <body>
          <Main />
          <KovaScript />
        </body>
      </Html>
    )
  }
}
