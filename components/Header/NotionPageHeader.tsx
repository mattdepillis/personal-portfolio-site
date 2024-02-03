// notion types + react-notion-x lib imports
import { CollectionViewPageBlock, PageBlock } from 'notion-types'
import { Breadcrumbs } from 'react-notion-x'

// custom lib methods + styles
import { navigationLinks } from '@/lib/config/config'

// custom components
import CustomNavLinks from './CustomNavLinks'
import ToggleThemeButton from '../Theme/ToggleThemeButton'


export const NotionPageHeader: React.FC<{
  block: CollectionViewPageBlock | PageBlock
}> = ({ block }) =>

  <header className='notion-header'>
    <div className='notion-nav-header'>
      <Breadcrumbs block={block} rootOnly={false} />

      <div className='notion-nav-header-rhs breadcrumbs'>
        {navigationLinks &&
          <CustomNavLinks navigationLinks={navigationLinks} />
        }
        <ToggleThemeButton />
      </div>
    </div>
  </header>
