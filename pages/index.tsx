// library imports
import { useEffect, useState } from 'react'

// lib vars + methods
import { domain } from '@/lib/config/config'
import { resolveNotionPage } from '@/lib/pagesAndUrls/resolve-notion-page'

// custom components
import { NotionPage } from '@/components/Pages/NotionPage'


export const getStaticProps = async () => {
  try {
    const homePageData = await resolveNotionPage(domain)
    return { props: { homePageData } }
  } catch (err) {
    console.error('page error', domain, err)
    throw err
  }
}

const Home = ({ homePageData }) => {
  const [homePage, setHomePage] = useState(undefined)

  useEffect(() => {
    setHomePage(homePageData)
  }, [homePageData])

  return <NotionPage {...homePage} />
}

export default Home
