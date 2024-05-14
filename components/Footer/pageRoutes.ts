// FontAwesomeIcon type
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// free icons - access with FAI icon prop
import { faPencil, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
// FA icons built-in to @react-icons
import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase'
import { FaCompactDisc } from '@react-icons/all-files/fa/FaCompactDisc'
import { FaPalette } from '@react-icons/all-files/fa/FaPalette'
// IO icons built-in to @react-icons
import { IoFingerPrint } from '@react-icons/all-files/io5/IoFingerPrint'

// custom types + interfaces
import { PageRoute } from '@/lib/types/footer'

/**
 * Dock menu page routes and associated icons for display.
 */
export const pageRoutes: PageRoute[] = [
  {
    id: 1,
    href: '/about',
    role: 'button',
    title: 'About',
    icon: IoFingerPrint
  },
  {
    id: 2,
    href: '/writing',
    role: 'button',
    title: 'Writing',
    fontAwesomeIcon: FontAwesomeIcon,
    fontAwesomeIconType: faPencil
  },
  {
    id: 3,
    href: '/projects',
    role: 'button',
    title: 'Projects',
    fontAwesomeIcon: FontAwesomeIcon,
    fontAwesomeIconType: faScrewdriverWrench
  },
  {
    id: 4,
    href: '/career',
    role: 'button',
    title: 'Career',
    icon: FaBriefcase
  },
  {
    id: 5,
    href: '/media',
    role: 'button',
    title: 'Media',
    icon: FaCompactDisc
  },
  {
    id: 6,
    href: '/art',
    role: 'button',
    title: 'Art',
    icon: FaPalette
  }
]
