import { HTMLAttributes } from 'react'

export interface GetLayoutResultProps extends HTMLAttributes<HTMLElement> {
  hasSider?: boolean
}

export interface BaseLayoutProps extends HTMLAttributes<HTMLElement> {
  title?: string
}
