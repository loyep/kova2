import React, { FC } from 'react'
import style from './index.less'
import { GetLayoutResultProps } from '../types'
import { Layout } from 'antd'
import Header from './Header'
import Footer from './Footer'
import BackTop from '../components/BackTop'
import cls from 'classnames'

export interface DefaultLayoutProps extends GetLayoutResultProps {
  title?: string
}

const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
  const { children } = props
  return (
    <Layout className={cls(style.layout, props.className)}>
      <Header></Header>
      {children}
      <Footer></Footer>
      <BackTop />
    </Layout>
  )
}

export default DefaultLayout
