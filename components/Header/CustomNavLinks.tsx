// classnames
import cs from 'classnames'

// react-notion-x lib imports
import { useNotionContext } from 'react-notion-x'

// custom types
import { NavLink } from '@/lib/types/header'

// custom styles
import styles from '../styles.module.css'

/**
 * A React functional component that enables custom navigation links in the page header.
 * NOTE: I do not use this for site v=1; this is here for future optionality.
 * @param {NavLink[]} navigationLinks - a list of navigation links objects to be rendered within the page header.
 * @return {React.FC<Props>} - a custom functional component containing nav links.
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
