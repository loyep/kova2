import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface HistoryPageProps {
  data?: any
}

const HistoryPage: KovaPage<HistoryPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default HistoryPage
