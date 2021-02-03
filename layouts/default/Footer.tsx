import { useRouter } from 'next/router'
import Link from '@/components/Link'
import { Layout, Button } from 'antd'
import {
  WeiboOutlined,
  GithubOutlined,
  MailOutlined,
  WechatOutlined,
  QqOutlined,
} from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { RootState, ConfigState } from '@/store/types'
import { FC, HTMLAttributes, useMemo, useState } from 'react'
import './Footer.less'

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  simple?: boolean
}

const footerMenuList = [
  {
    url: 'https://www.mywpku.com/uncategorized',
    title: '杂记',
  },
  {
    url: 'https://www.mywpku.com/wordpress-premium-themes',
    title: 'WordPress 付费主题推荐',
  },
]

const footerLinkList = [
  {
    url: 'https://www.mywpku.com/wordpress-premium-themes',
    title: 'WordPress 付费主题推荐',
    target: '',
    rel: 'noreferrer',
  },
  {
    url: 'https://www.mywpku.com/wordpress-premium-themes',
    title: 'WordPress 付费主题推荐',
    target: '',
    rel: 'noreferrer',
  },
  {
    url: 'https://www.mywpku.com/wordpress-premium-themes',
    title: 'WordPress 付费主题推荐',
    target: '',
    rel: 'noreferrer',
  },
  {
    url: 'https://www.mywpku.com/wordpress-premium-themes',
    title: 'WordPress 付费主题推荐',
    target: '',
    rel: 'noreferrer',
  },
  {
    url: 'http://blog.wpjam.com',
    title: '我爱水煮鱼',
    target: '',
    rel: 'noreferrer',
  },
  {
    url: 'http://www.farisl.com/',
    title: 'Faris Lee',
    target: '',
    rel: 'noreferrer',
  },
]

const Footer: FC<FooterProps> = (props) => {
  const { name, url } = useSelector<RootState, ConfigState>((state: RootState) => state.config)
  const [menus] = useState<any[]>(footerMenuList)
  const [links] = useState<any[]>(footerLinkList)
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  const footerMenus = useMemo(() => {
    return menus && menus.length ? (
      <ul className="footer-menu">
        {menus.map((menu) => (
          <li key={menu.url} className="footer-menu-item">
            <a href={menu.url}>{menu.title}</a>
          </li>
        ))}
      </ul>
    ) : null
  }, [menus])

  const footerLinks = useMemo(() => {
    return links && links.length
      ? links.map((link, index) => (
          <a key={index} href={link.url} target={link.target} rel={link.rel}>
            {link.title}
          </a>
        ))
      : null
  }, [menus])

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
        <a href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          鲁ICP备20027500号
        </a>
      </div>
    )
  }, [name, url])

  return (
    <Layout.Footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-left">
            {footerMenus}
            {copyright}
          </div>
          <div className="flex-md-fill"></div>
          <div className="footer-content-right">
            <Button type="primary" className="weibo" icon={<WeiboOutlined />} />
            <Button type="primary" className="mail" icon={<MailOutlined />} />
            <Button type="primary" className="github" icon={<GithubOutlined />} />
            <Button type="primary" className="wechat" icon={<WechatOutlined />} />
            <Button type="primary" className="qq" icon={<QqOutlined />} />
          </div>
        </div>
        {isHome && (
          <div className="footer-links">
            <span className="footer-links-title">合作伙伴：</span>
            {footerLinks}
          </div>
        )}
      </div>
    </Layout.Footer>
  )
}

Footer.defaultProps = {}

export default Footer
