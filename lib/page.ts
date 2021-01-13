import { NextPage } from 'next'
import { ReactNode, FC, HTMLAttributes } from 'react'

// export type GetLayoutResultProps = FC<any>

export interface GetLayoutResultProps extends HTMLAttributes<HTMLElement> {
  hasSider?: boolean
}

export interface ErrorPageProps {
  statusCode?: number
  title?: string
  children?: ReactNode
  description?: string
}

export interface PageProps {
  title?: string
  description?: string
  error?: ErrorPageProps
  initialState?: any
}

export type GetLayoutProps<P extends { [key: string]: any } = { [key: string]: any }> = (
  props: P,
) => GetLayoutResultProps

export interface PageLayoutProps {
  Layout?: FC<{ children: ReactNode } & { [key: string]: any }> | FC<any>
  meta?: { [key: string]: any }
}

export interface PageWithLayout {
  layout?: FC<{ children: ReactNode } & { [key: string]: any }> | FC<any>
  layoutProps?: PageLayoutProps
}

export type KovaPage<P = {}, IP = P> = NextPage<P, IP> & PageWithLayout
