import { FC } from 'react'
import { Layout } from 'antd'
import BackTop from '@/components/BackTop'
import Header from './Header'
import Footer from './Footer'
import { GetLayoutResultProps } from '../types'
import cls from 'classnames'
import style from './default.less'

export interface AdminLayoutProps extends GetLayoutResultProps {
  theme?: string
}

const AdminLayout: FC<AdminLayoutProps> = (props) => {
  const { children } = props

  return (
    <Layout className={cls(style.layout, props.className)}>
      <Header />
      <div className={style.content}>{children}</div>
      <Footer />
      <BackTop />
    </Layout>
  )
}

AdminLayout.defaultProps = {}

export default AdminLayout
