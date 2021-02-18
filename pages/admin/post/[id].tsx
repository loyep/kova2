import AdminLayout from '@/layouts/admin'
import type { KovaPage } from '@/components/Kova'

interface PostsProps {
  redirect?: string
}

const AdminPosts: KovaPage<PostsProps> = (props) => {
  return (
    <AdminLayout>
      <h1>文章</h1>
    </AdminLayout>
  )
}

export default AdminPosts
