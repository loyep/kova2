import Link from 'next/link'
import React, { FC, useState, useEffect, HTMLAttributes, ReactNode } from 'react'
import { Layout, Tooltip, Menu } from 'antd'
import { HistoryOutlined, SearchOutlined } from '@ant-design/icons'
import style from './default.less'
import cls from 'classnames'
import ClientOnly from '@/components/Kova/ClientOnly'
import Avatar from './Avatar'

interface HeaderMenu {
  url: string
  title: string
  icon?: ReactNode
}

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  menus?: HeaderMenu[]
}

const Header: FC<HeaderProps> = (props) => {
  const [scroll, setScroll] = useState(false)
  const { menus = [] } = props

  const headerClasses = cls([
    style.header,
    'fixed',
    {
      scroll,
    },
  ])

  const onScroll = () => {
    setScroll(document.body.scrollTop + document.documentElement.scrollTop > 30)
  }

  const renderMenus = () => {
    return (
      <Menu className={'headerMenu'} mode="horizontal">
        {menus.map((menu) => (
          <Menu.Item key={menu.url}>
            <Link href={menu.url}>{menu.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    )
  }

  useEffect(() => {
    onScroll()
    document.addEventListener('scroll', onScroll, true)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onSearch = (e) => {
    e.preventDefault()
    console.log('search')
  }

  return (
    <Layout.Header className={headerClasses}>
      <div className="container">
        <div className={style.headerLogo}>
          <Link href="/">
            <img
              className="logo"
              src="https://cosy.demo.nicetheme.xyz/wp-content/themes/Cosy3.3.0/images/logo.png"
              alt="kova"
            />
          </Link>
        </div>
        <div className={cls('headerNav', 'right')}>
          <div className={'headerMenu'}>
            <div className="navItem">
              <a className="nav-link" onClick={onSearch}>
                <Tooltip placement="bottom" title="搜索">
                  <SearchOutlined />
                </Tooltip>
              </a>
            </div>
            <div className="navItem">
              <Link href="/history">
                <a className="nav-link" target="_blank">
                  <Tooltip placement="bottom" title="最近浏览记录">
                    <HistoryOutlined />
                  </Tooltip>
                </a>
              </Link>
            </div>
            <div className="navItem">
              <ClientOnly>
                <Avatar />
              </ClientOnly>
            </div>
          </div>
        </div>
        <div className={cls('headerNav', 'left')}>{renderMenus()}</div>
      </div>
    </Layout.Header>
  )
}

Header.defaultProps = {
  menus: [
    {
      title: '分类',
      url: '/admin/category',
    },
    {
      title: '标签',
      url: '/admin/tag',
    },
    {
      title: '用户',
      url: '/admin/user',
    },
    {
      title: '评论',
      url: '/admin/comment',
    },
    {
      title: '专题',
      url: '/admin/topic',
    },
  ],
}

export default Header
