import { FC } from 'react'
import { Layout } from 'antd'
import BackTop from '@/components/BackTop'
import Header from '../default/Header'
import Footer from '../default/Footer'
import { GetLayoutResultProps } from '../types'
import cls from 'classnames'
import style from '../default/default.less'

export interface BlogLayoutProps extends GetLayoutResultProps {
  theme?: string
}

const BlogLayout: FC<BlogLayoutProps> = (props) => {
  const { children } = props

  return (
    <Layout className={cls(style.layout, props.className)}>
      <Header />
      <div className={cls(style.content)}>{children}</div>
      <Footer />
      <BackTop />
    </Layout>
  )
}

BlogLayout.defaultProps = {}

export default BlogLayout
