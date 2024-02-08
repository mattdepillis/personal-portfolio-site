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


export const pageRoutes: PageRoute[] = [
  {
    id: 1,
    href: '/about-me-9721bbd7b07e40769788bee7fe4e1566',
    role: 'button',
    title: 'About',
    icon: IoFingerPrint
  },
  {
    id: 2,
    href: '/writing-1161cb246e014c0e9b0fbef369998df7',
    role: 'button',
    title: 'Writing',
    fontAwesomeIcon: FontAwesomeIcon,
    fontAwesomeIconType: faPencil
  },
  {
    id: 3,
    href: '/projects-5265624e897544b892e70b3fd90044a5',
    role: 'button',
    title: 'Projects',
    fontAwesomeIcon: FontAwesomeIcon,
    fontAwesomeIconType: faScrewdriverWrench
  },
  {
    id: 4,
    href: '/career-09ca863431314490bf09e2ba27fed4d8',
    role: 'button',
    title: 'Resume',
    icon: FaBriefcase
  },
  {
    id: 5,
    href: '/media-c07d64a7e5034b799d5c9c48a7400d21',
    role: 'button',
    title: 'Media',
    icon: FaCompactDisc
  },
  {
    id: 6,
    href: '/art-a1ac252b0c4d410183337252ecaf5626',
    role: 'button',
    title: 'Art',
    icon: FaPalette
  }
]
