import Layout from 'antd/lib/layout/layout'
import { FC, HTMLAttributes } from 'react'
import Head from 'next/head'

export interface BaseLayoutProps extends HTMLAttributes<HTMLElement> {
  title?: string
}

const BaseLayout: FC<BaseLayoutProps> = (props) => {
  const { children, title } = props

  return (
    <Layout className={props.className}>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      {children}
    </Layout>
  )
}

export default BaseLayout
