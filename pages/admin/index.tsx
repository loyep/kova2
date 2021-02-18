import AdminLayout from '@/layouts/admin'
import { Button } from 'antd'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { useEffect } from 'react'

// function getPaths(parsedHref: string, parsedAs?: string): string[] {
//   const { pathname } = window.location
//   const resolvedHref = resolve(pathname, parsedHref)
//   return [resolvedHref, parsedAs ? resolve(pathname, parsedAs) : resolvedHref]
// }

const AdminHomePage = () => {
  //   const router = useRouter()

  useEffect(() => {
    const url = new URL(location.href)
    console.log(url)
  }, [])

  return (
    <AdminLayout>
      <h1>控制台</h1>
      <Button type="link">
        <Link href="/admin/topic">专题</Link>
      </Button>
      <Button type="link">
        <Link href="/admin/post">文章</Link>
      </Button>
      <Button type="link">
        <Link href="/admin/tag">标签</Link>
      </Button>
      <Button type="link">
        <Link href="/admin/category">分类</Link>
      </Button>
      <Button type="link">
        <Link href="/admin/user">用户</Link>
      </Button>
      <Button type="link">
        <Link href="/admin/project">项目</Link>
      </Button>
      <Button type="link">
        <Link href="/admin/message">站内信</Link>
      </Button>
      <Button type="link">
        <Link href="/admin/comment">评论</Link>
      </Button>
    </AdminLayout>
  )
}

export default AdminHomePage
