// imports
import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'

// icons
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase'
import { FaCompactDisc } from '@react-icons/all-files/fa/FaCompactDisc'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaPalette } from '@react-icons/all-files/fa/FaPalette'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'

import { IoFingerPrint } from '@react-icons/all-files/io5/IoFingerPrint'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunny } from '@react-icons/all-files/io5/IoSunny'

import { MinusVertical } from 'tabler-icons-react'

// config vars + dark mode support
import { author, github, linkedin, twitter } from '@/lib/config/config'
import { useDarkMode } from '@/lib/utils/use-dark-mode'

// styling
import styles from '../styles.module.css'

export const Footer: React.FC = () => {
  const [hasMounted, setHasMounted] = useState<boolean>(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const footerClasses = classNames(styles.footer, {
    [styles.footerDarkMode]: isDarkMode
  })

  const socialClasses = classNames(styles.pageRoute, {
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
            <a
            // TODO gotta change styling
              className={socialClasses}
              href='/about-me-9721bbd7b07e40769788bee7fe4e1566'
              role='button'
              title='About'
            >
              <IoFingerPrint />
            </a>

            <a
            // TODO gotta change styling
              className={socialClasses}
              href='/writing-1161cb246e014c0e9b0fbef369998df7'
              role='button'
              title='Writing'
            >
              <FontAwesomeIcon icon={faPencil} />
            </a>

            <a
            // TODO gotta change styling
              className={socialClasses}
              href='/projects-5265624e897544b892e70b3fd90044a5'
              role='button'
              title='Projects'
            >
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </a>

            <a
            // TODO gotta change styling
              className={socialClasses}
              href='/career-09ca863431314490bf09e2ba27fed4d8'
              role='button'
              title='Resume'
            >
              <FaBriefcase />
            </a>

            <a
              className={socialClasses}
              href='/media-c07d64a7e5034b799d5c9c48a7400d21'
              role='button'
              title='Media'
            >
              <FaCompactDisc />
            </a>

            <a
              className={socialClasses}
              href='/art-a1ac252b0c4d410183337252ecaf5626'
              role='button'
              title='Art'
            >
              <FaPalette />
            </a>

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

            {/* <a>
              <MinusVertical />
            </a> */}

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
