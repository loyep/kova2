import { useEffect, useState } from 'react'
import NProgressStatic from 'nprogress'
import Router from 'next/router'

const routeChangeStart = () => {
  NProgressStatic.start()
}

const routeChangeEnd = () => {
  NProgressStatic.done()
}

type ProgressState = 'start' | 'end' | 'init'

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressState>('init')
  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeEnd)
    Router.events.on('routeChangeError', routeChangeEnd)
    return () => {
      Router.events.off('routeChangeStart', routeChangeStart)
      Router.events.off('routeChangeComplete', routeChangeEnd)
      Router.events.off('routeChangeError', routeChangeEnd)
    }
  }, [])

  useEffect(() => {
    switch (progress) {
      case 'start':
        routeChangeStart()
        break
      case 'end':
        routeChangeEnd()
        break
      case 'init':
        routeChangeEnd()
        break
    }
  }, [progress])

  return { progress, setProgress }
}

export default useProgress
