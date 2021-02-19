import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface PostPageProps {
  data?: any
}

const PostPage: KovaPage<PostPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default PostPage
