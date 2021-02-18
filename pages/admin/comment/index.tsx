import AdminLayout from '@/layouts/admin'
import Link from 'next/link'

const AdminPostsPage = () => (
  <AdminLayout>
    <h1>文章列表</h1>
    <Link href="/admin/post/222">文章1</Link>
  </AdminLayout>
)

export default AdminPostsPage
