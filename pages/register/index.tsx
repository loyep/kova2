import Link from 'next/link'

import AuthLayout from '@/layouts/auth'
import { KovaPage } from '@/components/Kova'

interface RegisterPageProps {
  redirect?: string
}

const RegisterPage: KovaPage<RegisterPageProps> = (Props) => {
  return (
    <AuthLayout>
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </AuthLayout>
  )
}

export default RegisterPage
