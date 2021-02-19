import { FC } from 'react'
import BackTop from '@/components/BackTop'
import Header from './Header'
import Footer from './Footer'
import BaseLayout, { BaseLayoutProps } from '../BaseLayout'
import cls from 'classnames'
import style from './default.less'

export interface DefaultLayoutProps extends BaseLayoutProps {
  theme?: string
}

const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
  const { children, title } = props

  return (
    <BaseLayout title={title} className={cls(style.layout, props.className)}>
      <Header />
      {children}
      <Footer />
      <BackTop />
    </BaseLayout>
  )
}

DefaultLayout.defaultProps = {}

export default DefaultLayout
