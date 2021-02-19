import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface GoPageProps {
  url: string
  type: string
}

const GoPage: KovaPage<GoPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>搜索</h1>
    </BlogLayout>
  )
}

export default GoPage
