import { FC } from 'react'
import BackTop from '@/components/BackTop'
import Header from './Header'
import Footer from './Footer'
import cls from 'classnames'
import style from './default.less'
import BaseLayout, { BaseLayoutProps } from '../BaseLayout'

export interface AdminLayoutProps extends BaseLayoutProps {
  theme?: string
}

const AdminLayout: FC<AdminLayoutProps> = (props) => {
  const { children, title } = props

  return (
    <BaseLayout title={title} className={cls(style.layout, props.className)}>
      <Header />
      <div className={style.content}>{children}</div>
      <Footer />
      <BackTop />
    </BaseLayout>
  )
}

AdminLayout.defaultProps = {}

export default AdminLayout
