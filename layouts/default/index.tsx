import { FC } from 'react'
import { Layout } from 'antd'
import BackTop from '@/components/BackTop'
import Header from './Header'
import Footer from './Footer'
import { GetLayoutResultProps } from '../types'
import cls from 'classnames'
import style from './default.less'

export interface DefaultLayoutProps extends GetLayoutResultProps {
  theme?: string
}

const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
  const { children } = props

  return (
    <Layout className={cls(style.layout, props.className)}>
      <Header />
      {children}
      <Footer />
      <BackTop />
    </Layout>
  )
}

DefaultLayout.defaultProps = {}

export default DefaultLayout
