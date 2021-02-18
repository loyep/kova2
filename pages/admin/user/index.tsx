import AdminLayout from '@/layouts/admin'
import type { KovaPage } from '@/components/Kova'
import Link from 'next/link'
import { Table, Dropdown, Menu, Badge } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { fetchUsers } from '@/api/admin'
import { useFetchData } from '@/lib/loadMoreData'

const onAction = (key: string | number, record: unknown) => {
  console.log(record)
}

const statusSettings = {
  inactivated: {
    color: '#f5222d',
    text: '未激活',
  },
  active: {
    color: 'green',
    text: '可用',
  },
  frozen: {
    color: 'orange',
    text: '冻结',
  },
}

const columns = [
  {
    title: '文章数',
    dataIndex: 'postsCount',
    width: 100,
    render: (text: string) => text || '0',
  },
  {
    title: '用户名',
    dataIndex: 'name',
    render: (text: string, record: any) => (
      <>
        <Link href={`/admin/user/${record.name}`}>{record.name}</Link>
        <Link href={`/user/${record.name}`} as={`/user/${record.name}`}>
          <a target="_blank" style={{ color: '#999', marginLeft: '4px' }}>
            <LinkOutlined />
          </a>
        </Link>
      </>
    ),
  },
  {
    title: '昵称',
    dataIndex: 'displayName',
    render: (text: string, record: any) => text || '-',
  },
  // {
  //   title: '描述',
  //   dataIndex: 'description',
  //   render: (text: string) => text || '-',
  // },
  {
    title: '邮箱',
    dataIndex: 'email',
    render: (text: string) => (text ? <a href={`mailto:${text}`}>{text}</a> : '-'),
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (text: string) => {
      const status = statusSettings[text]
      if (status) {
        return <Badge color={status.color} text={status.text} />
      }
      return <Badge color="blue" text={text} />
    },
  },
  {
    title: '操作',
    render: (text: string, record: any) => {
      const menu = (
        <Menu onClick={(info) => onAction(info.key, record)}>
          <Menu.Item key="inactivated">取消激活</Menu.Item>
          <Menu.Item key="active">激活</Menu.Item>
          <Menu.Item key="frozen">冻结</Menu.Item>
        </Menu>
      )

      return (
        <Dropdown.Button size="small" overlay={menu} onClick={() => onAction('edit', record)}>
          编辑
        </Dropdown.Button>
      )
    },
  },
]

interface AdminUsersProps {
  page?: number
}

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record: any) => ({
    disabled: String(record.id) === '500', // Column configuration not to be checked
    name: record.name,
  }),
}

const AdminUsers: KovaPage<AdminUsersProps> = (props) => {
  const { data, loading, pagination } = useFetchData([], { fetchData: fetchUsers })
  useEffect(() => {
    return () => {
      //
    }
  }, [])

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('sorter', sorter)
    console.log('filters', filters)
    console.log('extra', extra)
    console.log('pagination', pagination)
    console.log('22')
  }

  return (
    <AdminLayout>
      <Table
        dataSource={data}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        size="middle"
        rowKey="id"
        onChange={onChange}
        loading={loading}
        pagination={{ position: ['bottomRight'], ...pagination }}
      />
    </AdminLayout>
  )
}

export default AdminUsers
