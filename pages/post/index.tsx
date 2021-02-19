import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface PostsPageProps {
  data?: any
}

const PostsPage: KovaPage<PostsPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default PostsPage
