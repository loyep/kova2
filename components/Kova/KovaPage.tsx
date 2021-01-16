import { NextPage } from 'next'
import { FC, HTMLAttributes, ReactNode } from 'react'

// interface PageProps {
//   title?: string
//   description?: string
//   initialState?: any
// }

export interface GetLayoutResultProps extends HTMLAttributes<HTMLElement> {
  hasSider?: boolean
}

interface PageLayoutProps {
  Layout?: FC<{ children: ReactNode } & { [key: string]: any }>
  meta?: { [key: string]: any }
}

export type KovaPage<P = {}, IP = P> = NextPage<P, IP> & { layoutProps?: PageLayoutProps }
