import { FC } from 'react'
import { BackTop as ABackTop } from 'antd'
import { CaretUpOutlined } from '@ant-design/icons'
import './BackTop.less'

type BackTopProps = {
  title?: string
}

const BackTop: FC<BackTopProps> = (props) => {
  const { title } = props
  return (
    <ABackTop>
      <div className="backtop">
        <div className="backtopStack">
          <CaretUpOutlined />
          <span className="backtopStackText">{title}</span>
        </div>
      </div>
    </ABackTop>
  )
}

BackTop.defaultProps = {
  title: 'Top',
}

export default BackTop
