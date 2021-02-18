import Link from '@/components/Link'
import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import { RootState, ConfigState } from '@/store/types'
import { FC, HTMLAttributes, useMemo } from 'react'
import './Footer.less'

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  simple?: boolean
}

const Footer: FC<FooterProps> = (props) => {
  const { name, url } = useSelector<RootState, ConfigState>((state: RootState) => state.config)

  const copyright = useMemo(() => {
    return (
      <div className="copyright">
        Copyright © 2020
        <Link href="/" title={name}>
          {name}
        </Link>
        . Designed by
        <a href={url} title={name} target="_blank" rel="noreferrer">
          {name}
        </a>
        .
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">
          鲁ICP备20027500号
        </a>
      </div>
    )
  }, [name, url])

  return (
    <Layout.Footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-left">{copyright}</div>
        </div>
      </div>
    </Layout.Footer>
  )
}

Footer.defaultProps = {}

export default Footer
