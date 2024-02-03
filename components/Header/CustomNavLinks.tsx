// classnames
import * as React from 'react'
import cs from 'classnames'

// react-notion-x lib imports
import { useNotionContext } from 'react-notion-x'

// custom types
import { NavLink } from '@/lib/types/header'

// custom styles
import styles from '../styles.module.css'

/**
 * TODO function comment here - note that this is for custom navigation if I decide to go that route
 */
const CustomNavLinks: React.FC<{
  navigationLinks : NavLink[]
}> = ({ navigationLinks }) => {

  const { components, mapPageUrl } = useNotionContext()
  const { Link, PageLink } = components

  return (
    <>
      {navigationLinks?.map((link, index) => {
        if (!link.pageId && !link.url) {
          return null
        }

        if (link.pageId) {
          return (
            <PageLink
              href={mapPageUrl(link.pageId)}
              key={index}
              className={cs(styles.navLink, 'breadcrumb', 'button')}
            >
              {link.title}
            </PageLink>
          )
        } else return (
          <Link
            href={link.url}
            key={index}
            className={cs(styles.navLink, 'breadcrumb', 'button')}
          >
            {link.title}
          </Link>
        )})
        .filter(Boolean)
      }
    </>
  )
}

export default CustomNavLinks
