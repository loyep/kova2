import { PaginationProps } from 'antd'
import { useEffect, useState } from 'react'

interface LoadMoreOption {
  page?: number
  loadMore?: boolean
  fetchData: (params?: any) => Promise<any>
}

export const useFetchMoreData = (defaultData: any[] = [], options: LoadMoreOption) => {
  const { fetchData } = options
  const [loadMore, setLoadMore] = useState<boolean>(
    typeof options.loadMore === 'undefined' ? true : options.loadMore,
  )
  const [page, setPage] = useState<number>(options.page || 1)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(defaultData || [])

  const addData = (newData: any[]) => {
    setData([...data, ...newData])
  }

  const onLoadMore = async () => {
    if (loading) {
      return
    }
    try {
      setLoading(true)
      const _page = data.length ? page + 1 : 1
      const {
        data: { items, meta },
      } = await fetchData({ ...options, page: _page })
      if (items.length) {
        setPage(_page)
        const scrollTop = document.documentElement.scrollTop
        addData(items)
        if (meta.totalPages <= meta.currentPage) {
          setLoadMore(false)
        }
        setLoading(false)
        document.documentElement.scrollTop = scrollTop + 10
      } else {
        setLoadMore(false)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!defaultData || !defaultData.length) {
      onLoadMore()
    }
    return () => {
      //
    }
  }, [])

  return { data, loading, loadMore, onLoadMore }
}

export const useFetchData = (defaultData: any[] = [], options: LoadMoreOption) => {
  const { fetchData, ...rest } = options
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(defaultData || [])

  const onChange = async (page: number, pageSize?: number) => {
    if (loading) {
      return
    }
    try {
      setLoading(true)
      const {
        data: { items, meta },
      } = await fetchData({ ...rest, page, pageSize })
      if (items.length) {
        const scrollTop = document.documentElement.scrollTop
        setPagination({ ...pagination, total: meta.total, pageSize: meta.pageSize })
        setData(items)
        setLoading(false)
        document.documentElement.scrollTop = scrollTop + 10
      } else {
        setPagination({ ...pagination, total: meta.total, pageSize: meta.pageSize })
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  const [pagination, setPagination] = useState<PaginationProps>({
    onChange,
  })

  useEffect(() => {
    if (!defaultData || !defaultData.length) {
      onChange(1, undefined)
    }
    return () => {
      //
    }
  }, [])

  return { data, loading, pagination }
}
