import Link from 'next/link'
import BlogLayout from '@/layouts/blog'

const IndexPage = () => (
  <BlogLayout>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    {/* </Layout> */}
  </BlogLayout>
)

export default IndexPage
