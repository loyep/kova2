import axios, { AxiosRequestConfig, Method } from 'axios'
import { message as AntMessage } from 'antd'
import { IncomingMessage, OutgoingMessage } from 'http'

export type { Method }

type IServerFetchType = {
  req?: IncomingMessage
  res?: OutgoingMessage
}

export const _serverFetch: IServerFetchType = {}

export function requestMiddleware(req: IncomingMessage, res: OutgoingMessage) {
  _serverFetch.req = req
  _serverFetch.res = res
}

export type FetchOptions = AxiosRequestConfig & {
  useToken?: boolean
}

export const service = axios.create({
  baseURL: 'https://aiecho.cn',
  // baseURL: 'http://dev.loyep.com:3001',
  withCredentials: true,
  timeout: 10000,
})

service.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
)

export default function fetch(options: FetchOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    const reqConf = options
    reqConf.method = (reqConf.method || 'GET').toUpperCase() as Method
    service(reqConf)
      .then((response) => {
        const { data } = response
        const { code, message } = data || {}
        const success = code === 0

        if (!success && typeof window !== 'undefined') {
          AntMessage.error(message)
        }
        resolve({
          success,
          ...data,
        })
      })
      .catch((error) => {
        // if (typeof window !== 'undefined') {
        //   AntMessage.info(error || 'Network Error')
        // }
        reject()
      })
  })
}
