import { KovaPage } from '@/components/Kova'
import AdminLayout from '@/layouts/admin'
// import { GetServerSideProps } from 'next'
import { getUserById, updateUser } from '@/api/admin'

import { Form, Input, Button } from 'antd'
import ClientOnly from '@/components/Kova/ClientOnly'
import { GetServerSideProps } from 'next'

interface AdminUserProps {
  data: {
    id: number | string
    name: string
    displayName: string | null
    url: string | null
    meta: string | null
    avatar: string | null
    image: string | null
    status: string
  }
}

const AdminUser: KovaPage<AdminUserProps> = (props) => {
  const onFinish = async (values: any) => {
    console.log('Success:', values)
    const res = await updateUser(props.data.id, values)
    console.log(res)
  }

  return (
    <AdminLayout>
      <ClientOnly>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={props.data}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item label="用户名" name="name">
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: '必须填写邮箱' }]}
          >
            <Input type="email" allowClear />
          </Form.Item>

          <Form.Item label="用户昵称" name="displayName">
            <Input allowClear />
          </Form.Item>

          <Form.Item label="个人主页" name="url">
            <Input type="url" allowClear />
          </Form.Item>

          <Form.Item label="个人简介" name="bio">
            <Input allowClear />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              编辑用户
            </Button>
          </Form.Item>
        </Form>
      </ClientOnly>
    </AdminLayout>
  )
}

export default AdminUser

export const getServerSideProps: GetServerSideProps<AdminUserProps> = async ({ params = {} }) => {
  const { id } = params
  if (id) {
    const { data } = await getUserById(id as string)
    console.log(data)
    return { props: { data } }
  }
  return {
    notFound: true,
  }
}
