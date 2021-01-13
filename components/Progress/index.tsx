import NProgressStatic from 'nprogress'
import { FC, useEffect } from 'react'
import Router from 'next/router'

if (typeof window !== 'undefined') {
  NProgressStatic.configure({ minimum: 0.1 })
}

let timer: NodeJS.Timeout

const start = () => {
  clearTimeout(timer)
  timer = setTimeout(() => NProgressStatic.start(), 200)
}

const done = () => {
  clearTimeout(timer)
  NProgressStatic.done()
}

export const Progress: FC = () => {
  useEffect(() => {
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', done)
    Router.events.on('routeChangeError', done)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', done)
      Router.events.off('routeChangeError', done)
    }
  }, [])
  return <></>
}

export default Progress
