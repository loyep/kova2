import Link from '@/components/Link'
import dynamic from 'next/dynamic'
import React, { FC, useState, useEffect, HTMLAttributes, ReactNode } from 'react'
import { Layout, Tooltip, Menu, Spin } from 'antd'
import { HistoryOutlined, SearchOutlined } from '@ant-design/icons'
import style from './index.less'
import cls from 'classnames'

const Avatar = dynamic(() => import('./Avatar'), {
  loading: () => <Spin></Spin>,
  ssr: false,
})

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
          <Menu.Item>
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
          <Link href="/" rel="home">
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
              <Link href="/history" className="nav-link" target="_blank">
                <Tooltip placement="bottom" title="最近浏览记录">
                  <HistoryOutlined />
                </Tooltip>
              </Link>
            </div>
            <div className="navItem">
              <Avatar />
            </div>
          </div>
        </div>
        <div className={cls('headerNav', 'left')}>{renderMenus}</div>
      </div>
    </Layout.Header>
  )
}

Header.defaultProps = {
  menus: [
    {
      title: '图片',
      url: '/category/picture',
    },
    {
      title: '测试',
      url: '/category/test001',
    },
    {
      title: '游戏',
      url: '/category/games',
    },
    {
      title: '视频',
      url: '/category/videos',
    },
    {
      title: '专题推荐',
      url: '/topic',
    },
    // <Menu.Item>
    //           <Link href="/category/picture">图片</Link>
    //         </Menu.Item>
    //         <Menu.Item>
    //           <Link href="/category/test001">测试</Link>
    //         </Menu.Item>
    //         <Menu.Item>
    //           <Link href="/category/games">游戏</Link>
    //         </Menu.Item>
    //         <Menu.Item>
    //           <Link href="/category/videos">视频</Link>
    //         </Menu.Item>
    //         <Menu.Item>
    //           <Link href="/topic">专题推荐</Link>
    //         </Menu.Item>
  ],
}

export default Header
