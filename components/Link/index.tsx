import { useRouter } from 'next/router'
import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'
import React, { FC, cloneElement, useMemo, AnchorHTMLAttributes } from 'react'
import cls from 'classnames'

export { NextLink }

export type LinkProps = NextLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    activeClassName?: string
  }

export const Link: FC<LinkProps> = ({
  as,
  href,
  replace,
  scroll,
  passHref,
  shallow,
  prefetch,
  className,
  activeClassName,
  ...rest
}) => {
  const router = useRouter()
  const props: AnchorHTMLAttributes<HTMLAnchorElement> = useMemo(() => {
    const active = router.asPath === href
    return {
      ...rest,
      className: cls(className, active ? 'active' : '') || undefined,
    }
  }, [rest])

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      <a {...props}></a>
    </NextLink>
  )
}

Link.defaultProps = {
  activeClassName: 'active',
}

export default Link
