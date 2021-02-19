import BlogLayout from '@/layouts/blog'
import { FC } from 'react'

interface CategoryPageProps {
  data?: any
}

const CategoryPage: FC<CategoryPageProps> = (props) => {
  return (
    <BlogLayout title={'分类'}>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default CategoryPage
