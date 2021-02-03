import Link from 'next/link'
import Layout from '@/components/Layout'
import DefaultLayout from '@/layouts/default'

const IndexPage = () => (
  <DefaultLayout>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  </DefaultLayout>
)

export default IndexPage
