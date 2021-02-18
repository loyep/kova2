import { KovaPage } from '@/components/Kova'
import AdminLayout from '@/layouts/admin'
import { getCategoryById, updateCategory } from '@/api/admin'

import { Form, Input, Button } from 'antd'
import ClientOnly from '@/components/Kova/ClientOnly'
import { GetServerSideProps } from 'next'

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
  const onFinish = async (values: any) => {
    console.log('Success:', values)
    const res = await updateCategory(props.data.id, values)
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
          <Form.Item
            label="分类名"
            name="name"
            rules={[{ required: true, message: '必须填写分类名称' }]}
          >
            <Input allowClear />
          </Form.Item>

          <Form.Item label="分类缩略名" name="slug">
            <Input allowClear />
          </Form.Item>

          <Form.Item label="分类描述" name="description">
            <Input.TextArea allowClear />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              编辑分类
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
    const { data } = await getCategoryById(id as string)
    return { props: { data } }
  }
  return {
    notFound: true,
  }
}
