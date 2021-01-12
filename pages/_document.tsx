import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export class KovaScript extends NextScript {
  getScripts(files: any) {
    const scripts = super.getScripts(files)
    if (process.env.NODE_ENV === 'production') {
      scripts.forEach((script) => {
        if (script.props.src && (script.props.src as string).indexOf('styles') !== -1) {
          script.props.async = false
        }
      })
    }
    return scripts
  }
}

export default class KovaDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/fonts/iconfont/iconfont.css" as="style" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
        </Head>
        <body>
          <Main></Main>
          <KovaScript></KovaScript>
        </body>
      </Html>
    )
  }
}
