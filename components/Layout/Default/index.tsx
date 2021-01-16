import { ReactNode, FC } from 'react'
import { Layout as ALayout } from 'antd'
import BackTop from '../BackTop'
import style from './index.less'
import { GetLayoutResultProps } from '@/components/Kova/KovaPage'
import cls from 'classnames'

export interface BlankLayoutProps extends GetLayoutResultProps {
  header?: ReactNode
  footer?: ReactNode
}

const BlankLayout: FC<BlankLayoutProps> = (props) => {
  const { footer, header, children } = props
  console.log(props.className)

  return (
    <ALayout className={cls(style.layout, props.className)}>
      {header}
      {children}
      {footer}
      <BackTop />
    </ALayout>
  )
}

BlankLayout.defaultProps = {}

export default BlankLayout
