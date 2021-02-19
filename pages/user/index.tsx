import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface UsersPageProps {
  data?: any
}

const UsersPage: KovaPage<UsersPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default UsersPage
