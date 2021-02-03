import Link from 'next/link'
import Layout from '@/components/Layout'
import { Button } from 'antd'
import { KovaPage } from '@/components/Kova'

const AboutPage: KovaPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Button type="primary">
        <Link href="/">
          <a>Go home</a>
        </Link>
      </Button>
    </p>
  </Layout>
)

export default AboutPage
