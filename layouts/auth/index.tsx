import { FC } from 'react'
import BackTop from '@/components/BackTop'
import Footer from '../default/Footer'
import cls from 'classnames'
import style from '../default/default.less'
import BaseLayout, { BaseLayoutProps } from '../BaseLayout'

export interface BlogLayoutProps extends BaseLayoutProps {
  theme?: string
}

const AuthLayout: FC<BlogLayoutProps> = (props) => {
  const { children, title } = props

  return (
    <BaseLayout title={title} className={cls(style.layout, props.className)}>
      <div className={cls(style.content)}>{children}</div>
      <Footer />
      <BackTop />
    </BaseLayout>
  )
}

AuthLayout.defaultProps = {}

export { AuthLayout }

export default AuthLayout
