import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface TagsPageProps {
  data?: any
}

const TagsPage: KovaPage<TagsPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default TagsPage
