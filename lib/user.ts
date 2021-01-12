import { IncomingMessage } from 'http'
import { useEffect, useState } from 'react'
import { initialState } from '@/store'

export const fetchUser = async () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
    return () => {
      setIsMounted(false)
    }
  }, [])

  return isMounted
}

export const isLogin = (req?: IncomingMessage) => {
  return initialState.auth && !!initialState.auth.id
}
