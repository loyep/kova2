import { Dropdown, Avatar as AAvatar, Button, Menu } from 'antd'
import { NextLink } from '@/components/Link'
import { useRouter } from 'next/router'
import { logout } from '@/api'
import { FC } from 'react'
import { connect } from 'react-redux'
import { AuthState, RootState } from '@/store/types'
import { updateAuth } from '@/store/actions'
import { bindActionCreators } from 'redux'
import { EditOutlined, ProfileOutlined, SettingOutlined, PoweroffOutlined } from '@ant-design/icons'
import style from './index.less'

type AvatarProps = {
  user: AuthState
  updateUser: Function
}

const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  const router = useRouter()
  const { user } = props
  console.log('user', user)

  const goLogin = () => {
    router.push({
      pathname: '/login',
      query: {
        next: router.asPath,
      },
    })
  }

  if (!user || !user.id) {
    return (
      <div>
        <Button type="default" onClick={goLogin}>
          登录
        </Button>
      </div>
    )
  }

  const onLogout = async () => {
    await logout()
    localStorage.removeItem('local_user')
    location.reload()
  }

  const menu = (
    <Menu>
      <Menu.Item icon={<EditOutlined />}>
        <NextLink href={`/write`}>写文章</NextLink>
      </Menu.Item>
      <Menu.Item icon={<ProfileOutlined />}>
        <NextLink href={`/user/${user.name}`}>个人中心</NextLink>
      </Menu.Item>
      <Menu.Item icon={<SettingOutlined />}>
        <NextLink href="/user/account">账号设置</NextLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item icon={<SettingOutlined />}>
        <NextLink href="/admin">管理后台</NextLink>
      </Menu.Item>
      <Menu.Item icon={<PoweroffOutlined />}>
        <a onClick={onLogout}>退出登录</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown
      overlayClassName={style.avatar}
      overlay={menu}
      overlayStyle={{ top: '60px' }}
      placement="bottomCenter"
      arrow
    >
      <AAvatar src={user.avatar}></AAvatar>
    </Dropdown>
  )
}

const mapStateToProps = (state: RootState) => ({
  user: state.auth,
})

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: bindActionCreators(updateAuth, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)
