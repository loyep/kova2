import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface TopicPageProps {
  data?: any
}

const TopicPage: KovaPage<TopicPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default TopicPage
