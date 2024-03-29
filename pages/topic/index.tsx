import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface TopicsPageProps {
  data?: any
}

const TopicsPage: KovaPage<TopicsPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default TopicsPage
