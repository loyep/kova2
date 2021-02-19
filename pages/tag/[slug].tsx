import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface TagPageProps {
  data?: any
}

const TagPage: KovaPage<TagPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default TagPage
