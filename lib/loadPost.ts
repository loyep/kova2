import { fetchArticles } from '@/api'
import { useState } from 'react'

interface LoadMoreOption {
  page?: number
  loadMore?: boolean
  category?: string | number
}

export const useLoadMorePost = (defaultData: any[] = [], options: LoadMoreOption = {}) => {
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
      } = await fetchArticles({ ...options, page: _page })
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

  return { data, loading, loadMore, onLoadMore }
}
