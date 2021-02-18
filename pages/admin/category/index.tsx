import AdminLayout from '@/layouts/admin'
import type { KovaPage } from '@/components/Kova'
import Link from 'next/link'
import { Button, Popconfirm, Table } from 'antd'
import { useEffect } from 'react'
import { fetchCategories } from '@/api/admin'
import { dateFormat } from '@/utils/date'
import { useFetchData } from '@/lib/loadMoreData'

const onDelete = (text: string, record: unknown) => {
  //
}

const columns = [
  {
    title: '分类名',
    key: 'id',
    render: (text: string, record: any) => (
      <Link href={`/admin/category/${record.id}`}>{record.name}</Link>
    ),
  },
  {
    title: '描述',
    dataIndex: 'description',
    render: (text: string) => text || '-',
  },
  {
    title: '文章数',
    dataIndex: 'postsCount',
    render: (text: string) => text || '0',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    sorter: true,
    render: (val: string) => <span>{dateFormat(val, 'YYYY-MM-DD HH:mm:ss')}</span>,
  },
  {
    title: '操作',
    render: (text: string, record: any) => (
      <Popconfirm title={`确认删除 ${record.name} ?`} onConfirm={() => onDelete(text, record)}>
        <Button type="link" size="small">
          删除
        </Button>
      </Popconfirm>
    ),
  },
]

interface AdminCategoriesProps {
  page?: number
}

const AdminCategories: KovaPage<AdminCategoriesProps> = (props) => {
  const { data, loading, pagination } = useFetchData([], { fetchData: fetchCategories })
  useEffect(() => {
    return () => {
      //
    }
  }, [])

  return (
    <AdminLayout>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ position: ['bottomRight'], ...pagination }}
      />
    </AdminLayout>
  )
}

export default AdminCategories
