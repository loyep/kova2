import { fetchArticles } from '@/api'
import { useMemo, useState } from 'react'

export interface IPaginationMeta {
  /**
   * the amount of items on this specific page
   */
  itemCount: number
  /**
   * the total amount of items
   */
  totalItems: number
  /**
   * the amount of items that were requested per page
   */
  itemsPerPage: number
  /**
   * the total amount of pages in this paginator
   */
  totalPages: number
  /**
   * the current page this paginator "points" to
   */
  currentPage: number
}

export const useLoadMoreArticles = (
  defaultData: any[] = [],
  search: {
    s?: string
    userId?: number
    categoryId?: number
    tagId?: number
  } = {},
  paginationMeta: IPaginationMeta,
) => {
  const [loading, setLoading] = useState(false)
  const [meta, setMeta] = useState<IPaginationMeta>(paginationMeta)
  const [data, setData] = useState(defaultData || [])
  const loadMore = useMemo(() => meta.currentPage < meta.totalPages, [meta])

  const addData = (newData: any[]) => {
    setData([...data, ...newData])
  }

  const onLoadMore = async () => {
    if (loading) {
      return
    }
    try {
      setLoading(true)
      const _page = meta.currentPage + 1
      const {
        data: { items, meta: dataMeta },
      } = await fetchArticles({ ...search, page: _page })
      if (items.length) {
        const scrollTop = document.documentElement.scrollTop
        addData(items)
        setMeta(dataMeta)
        setLoading(false)
        document.documentElement.scrollTop = scrollTop + 10
      } else {
        setMeta(meta)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return { data, loading, loadMore, onLoadMore }
}
