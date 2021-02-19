import { FC } from 'react'
import BackTop from '@/components/BackTop'
import Header from '../default/Header'
import Footer from '../default/Footer'
import cls from 'classnames'
import BaseLayout, { BaseLayoutProps } from '../BaseLayout'
import style from '../default/default.less'

export interface BlogLayoutProps extends BaseLayoutProps {
  theme?: string
}

const BlogLayout: FC<BlogLayoutProps> = (props) => {
  const { children, title } = props

  return (
    <BaseLayout title={title} className={cls(style.layout, props.className)}>
      <Header />
      <div className={cls(style.content)}>{children}</div>
      <Footer />
      <BackTop />
    </BaseLayout>
  )
}

BlogLayout.defaultProps = {}

export default BlogLayout
