import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
require('dayjs/locale/zh')
require('dayjs/locale/en')
dayjs.locale('en') // 全局使用
dayjs.extend(relativeTime)

export const fromNow = (time: string) => dayjs(time).fromNow()

export const dateFormat = (time: string, fmt: string) => dayjs(time).format(fmt)
