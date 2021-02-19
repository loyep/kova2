import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface HomePageProps {
  data?: any
}

const HomePage: KovaPage<HomePageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default HomePage
