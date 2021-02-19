import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface UserPageProps {
  data?: any
}

const UserPage: KovaPage<UserPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default UserPage
