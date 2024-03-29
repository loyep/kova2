import BlogLayout from '@/layouts/blog'
import { FC } from 'react'

interface CategoriesPageProps {
  data?: any
}

const CategoriesPage: FC<CategoriesPageProps> = (props) => {
  return (
    <BlogLayout title={'分类'}>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default CategoriesPage
