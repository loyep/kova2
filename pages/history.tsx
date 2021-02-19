import Link from 'next/link'
// import Layout from '@/components/Layout'
import BlogLayout from '@/layouts/blog'

const IndexPage = () => (
  <BlogLayout>
    {/* <Layout title="Home | Next.js + TypeScript Example"> */}
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
