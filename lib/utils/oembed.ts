import { getPageTitle, parsePageId } from 'notion-utils'

import { author, host, name as configName } from '../config/config'
import { getPage } from '../pagesAndUrls/notion'

export const oembed = async ({
  url,
  maxWidth,
  maxHeight,
  dark = false
}: {
  url: string
  maxWidth?: number
  maxHeight?: number
  dark?: boolean
}) => {
  const pageId = parsePageId(url)

  let title = configName
  let authorName = author

  const page = await getPage(pageId)
  const pageTitle = getPageTitle(page)
  if (pageTitle) title = pageTitle

  const user = page.notion_user[Object.keys(page.notion_user)[0]]?.value
  const name = [user.given_name, user.family_name]
    .filter(Boolean)
    .join(' ')
    .trim()
  if (name) authorName = name

  const params: any = { lite: 'true' }
  if (dark) {
    params.dark = 'true'
  }

  const query = new URLSearchParams(params).toString()
  const embedUrl = `${host}/${pageId}?${query}`
  const defaultWidth = 800
  const defaultHeight = 600
  const width = maxWidth ? Math.min(maxWidth, defaultWidth) : defaultWidth
  const height = maxHeight ? Math.min(maxHeight, defaultHeight) : defaultHeight

  return {
    version: '1.0',
    type: 'rich',
    provider_name: author,
    provider_url: host,
    title,
    author_name: authorName,
    url,
    width,
    height,
    html: `<iframe src="${embedUrl}" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts" width="${width}" height="${height}" frameborder="0"></iframe>`
  }
}
