// imports
import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'

// social icons
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
// light + dark mode icons
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunny } from '@react-icons/all-files/io5/IoSunny'
// divider icon
import { MinusVertical } from 'tabler-icons-react'

// config vars + dark mode support
import { author, github, linkedin, twitter } from '@/lib/config/config'
import { useDarkMode } from '@/lib/utils/use-dark-mode'

// styling
import styles from '../styles.module.css'

// page routes for dynamic rendering
import { pageRoutes } from './pageRoutes'


export const Footer: React.FC = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  // footer classnames dynamically created; dependent on dark mode
  const footerClasses = classNames(styles.footer, {
    [styles.footerDarkMode]: isDarkMode
  })

  // page route classnames dynamically created; dependent on dark mode
  const pageRouteClasses = classNames(styles.pageRoute, {
    [styles.darkModePageRoute]: isDarkMode
  })

  const onToggleDarkMode = useCallback((e: any) => {
    e.preventDefault()
    toggleDarkMode()
  }, [toggleDarkMode])

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={footerClasses}>
      <div className={styles.social}>
        {hasMounted && (
          <>
            {pageRoutes.map((route, i) => (
              <a
                key={i}
                className={pageRouteClasses}
                href={route.href}
                role={route.role}
                title={route.title}
              >
                {route.fontAwesomeIcon
                  ? <route.fontAwesomeIcon icon={route.fontAwesomeIconType} />
                  : <route.icon />
                }
              </a>
            ))}

            <a className={styles.socialDivider}>
              <MinusVertical size={32} />
            </a>

            {twitter && (
              <a
                className={styles.twitter}
                href={`https://twitter.com/${twitter}`}
                title={`Twitter @${twitter}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </a>
            )}

            {github && (
              <a
                className={styles.github}
                href={`https://github.com/${github}`}
                title={`GitHub @${github}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub />
              </a>
            )}

            {linkedin && (
              <a
                className={styles.linkedin}
                href={`https://www.linkedin.com/in/${linkedin}`}
                title={`LinkedIn ${author}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin />
              </a>
            )}

            <a
              className={styles.toggleDarkMode}
              href='#'
              role='button'
              onClick={onToggleDarkMode}
              title='Toggle dark mode'
            >
              {isDarkMode ? <IoMoonSharp /> : <IoSunny />}
            </a>
          </>
        )}
      </div>
    </footer>
  )
}

export default Footer
