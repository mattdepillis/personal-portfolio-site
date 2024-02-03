import { ExtendedRecordMap } from 'notion-types'

import { Site } from './site'

export interface PageError {
  message?: string
  statusCode: number
}

export interface PageProps {
  site?: Site
  recordMap?: ExtendedRecordMap
  pageId?: string
  error?: PageError
}

export interface NotionPageInfo {
  pageId: string
  title: string
  image: string
  imageObjectPosition: string
  author: string
  authorImage: string
  detail: string
}

export interface CanonicalPageMap {
  [canonicalPageId: string]: string
}
