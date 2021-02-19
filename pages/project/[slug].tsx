import { KovaPage } from '@/components/Kova'
import BlogLayout from '@/layouts/blog'

interface ProjectPageProps {
  data?: any
}

const ProjectPage: KovaPage<ProjectPageProps> = (props) => {
  return (
    <BlogLayout>
      <h1>文章</h1>
    </BlogLayout>
  )
}

export default ProjectPage
