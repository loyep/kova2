import Link from 'next/link'
import Layout from '@/components/Layout'
import { Button } from 'antd'
import { KovaPage } from '@/components/Kova'

const AboutPage: KovaPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
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
