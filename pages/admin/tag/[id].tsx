import { KovaPage } from '@/components/Kova'
import AdminLayout from '@/layouts/admin'
import { getTagById, updateTag } from '@/api/admin'

import { Form, Input, Button, message } from 'antd'
import ClientOnly from '@/components/Kova/ClientOnly'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

interface AdminUserProps {
  data: {
    id: number | string
    name: string
    slug: string
    description: string | null
    meta: string | null
    image: string | null
  }
}

const AdminTag: KovaPage<AdminUserProps> = (props) => {
  const router = useRouter()
  const onFinish = async (values: any) => {
    console.log('Success:', values)
    const res = await updateTag(props.data.id, values)
    console.log(res)
    message.success('更新标签成功')
    router.replace('/admin/tag', '/admin/tag')
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
          <Form.Item
            label="标签名"
            name="name"
            rules={[{ required: true, message: '必须填写标签名称' }]}
          >
            <Input allowClear />
          </Form.Item>

          <Form.Item label="标签缩略名" name="slug">
            <Input allowClear />
          </Form.Item>

          <Form.Item label="标签描述" name="description">
            <Input.TextArea allowClear />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              编辑标签
            </Button>
          </Form.Item>
        </Form>
      </ClientOnly>
    </AdminLayout>
  )
}

export default AdminTag

export const getServerSideProps: GetServerSideProps<AdminUserProps> = async ({ params = {} }) => {
  const { id } = params
  if (id) {
    const { data } = await getTagById(id as string)
    return { props: { data } }
  }
  return {
    notFound: true,
  }
}
