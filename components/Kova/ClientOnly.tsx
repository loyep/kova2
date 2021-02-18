import { ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
}

const ClientOnly = ({ children }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined')
  }, [])
  return <>{isBrowser ? children : null}</>
}

export default ClientOnly
