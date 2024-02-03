// library imports
import { GetStaticProps } from 'next'

// custom component imports
import { NotionPage } from '@/components/Pages/NotionPage'

// custom lib imports
import { domain, isDev } from '@/lib/config/config'
import { getSiteMap } from '@/lib/pagesAndUrls/get-site-map'
import { resolveNotionPage } from '@/lib/pagesAndUrls/resolve-notion-page'
import { PageProps } from '@/lib/types/pages'
import { Params } from '@/lib/types/urls'


export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const rawPageId = context.params.pageId as string

  try {
    const props = await resolveNotionPage(domain, rawPageId)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, rawPageId, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }

  const siteMap = await getSiteMap()

  const staticPaths = {
    paths: Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
      params: {
        pageId
      }
    })),
    // paths: [],
    fallback: true
  }

  console.log(staticPaths.paths)
  return staticPaths
}

export default function NotionDomainDynamicPage(props) {
  return <NotionPage {...props} />
}
