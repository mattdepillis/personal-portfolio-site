import { useEffect, useState } from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'

import { resolveNotionPage } from '@/lib/resolve-notion-page'

// import { HomeContainer } from '../styles/containers'

// import Page from '../components/Page'


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

  return (
    // <>
    //     {homePage &&
    //       <HomeContainer>
    //         <Page
    //           page={homePage}
    //         />
    //       </HomeContainer>
    //     }
    // </>
    <>
      <NotionPage {...homePage} />
    </>
  )
}

export default Home
