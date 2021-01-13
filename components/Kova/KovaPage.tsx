import { NextPage } from 'next'
import { FC, ReactNode } from 'react'

// interface PageProps {
//   title?: string
//   description?: string
//   initialState?: any
// }

interface PageLayoutProps {
  Layout?: FC<{ children: ReactNode } & { [key: string]: any }>
  meta?: { [key: string]: any }
}

export type KovaPage<P = {}, IP = P> = NextPage<P, IP> & { layoutProps?: PageLayoutProps }
