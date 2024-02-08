import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { IconType } from '@react-icons/all-files'

export interface PageRoute {
  id: number
  href: string
  role: string
  title: string
  icon?: IconType
  fontAwesomeIcon?: typeof FontAwesomeIcon
  fontAwesomeIconType?: IconDefinition
}
