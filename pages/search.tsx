import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface SearchPageProps {
  data?: any
}

const SearchPage: KovaPage<SearchPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>搜索</h1>
    </BlogLayout>
  )
}

export default SearchPage
