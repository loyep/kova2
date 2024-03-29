import fetch from '@/utils/fetch'

const apiPrefix = '/api/v1/admin'

export const fetchArticles = (params: any = {}) =>
  fetch({
    method: 'get',
    url: '/api/v1/articles',
    params,
  })

export const fetchCategories = (params: any = {}) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/category`,
    params,
  })

export const fetchTags = (params: any = {}) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/tag`,
    params,
  })

export const fetchUsers = (params: any = {}) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/user`,
    params,
  })

export const getUserById = (id: number | string) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/user/${id}`,
  })

export const getCategoryById = (id: number | string) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/category/${id}`,
  })

export const getTagById = (id: number | string) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/tag/${id}`,
  })

export const updateUser = (id: number | string, data: any = {}) =>
  fetch({
    method: 'put',
    url: `${apiPrefix}/user/${id}`,
    data,
  })

export const updateTag = (id: number | string, data: any = {}) =>
  fetch({
    method: 'put',
    url: `${apiPrefix}/tag/${id}`,
    data,
  })

export const updateCategory = (id: number | string, data: any = {}) =>
  fetch({
    method: 'put',
    url: `${apiPrefix}/category/${id}`,
    data,
  })

export const fetchArticle = (data: any) => {
  const { slug, ...params } = data || {}
  return fetch({
    method: 'get',
    url: `${apiPrefix}/articles/${slug}`,
    params,
  })
}

export const fetchTag = (params: any) => {
  const { slug, ...others } = params || {}
  return fetch({
    method: 'get',
    url: `${apiPrefix}/tags/${slug}`,
    params: others,
  })
}

export const fetchTopic = (params: any) => {
  const { slug, ...others } = params || {}
  return fetch({
    method: 'get',
    url: `${apiPrefix}/topics/${slug}`,
    params: others,
  })
}

export const fetchCategory = (params: any) => {
  const { slug, ...others } = params || {}
  return fetch({
    method: 'get',
    url: `${apiPrefix}/categories/${slug}`,
    params: others,
  })
}

export const fetchCategoryList = (params: any) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/category`,
    params,
  })

export const fetchTopicsList = (params: any = {}) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/topics`,
    params,
  })

export const fetchRecommends = () =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/recommends`,
  })

export const fetchBanner = () =>
  fetch({
    method: 'get',
    url: '/api/v1/banner',
  })

export const login = (data: any) =>
  fetch({
    method: 'post',
    url: `${apiPrefix}/login`,
    data,
  })

export const logout = (data: any = {}) =>
  fetch({
    method: 'post',
    url: `${apiPrefix}/logout`,
    data,
  })

export const profile = () =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/profile`,
  })

export const getArticleByUserId = (userId: number | string) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/users/${userId}/articles`,
  })

export const getLikedArticleByUserId = (userId: number | string) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/articles/users/${userId}/like`,
  })

export const getUserByName = (name: string) =>
  fetch({
    method: 'get',
    url: `${apiPrefix}/users/${name}`,
  })
