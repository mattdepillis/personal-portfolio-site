// imports
import Link from 'next/link'

/**
 * Method that grabs a nested url from a Notion database entry and sets it as the entry's href.
 * This is useful for databases such as my Media page reading list, for which I want to make each
 * database entry link out to the actual article URL, rather than the Notion database entry page url.
 */
export const NestedLink: React.FC<{
  pageTitle: string,
  href: string,
  as: string,
  passHref: boolean,
  prefetch: boolean,
  replace: boolean,
  scroll: boolean,
  shallow: boolean,
  locale: string,
  [key: string]: any
}> = ({
  pageTitle,
  href, as, passHref, prefetch,
  replace, scroll, shallow, locale,
  ...props
}) => {
  /*
    * for supported collections, remaps collection item hrefs to url property
    * right now, only supports media reading table as a hackaround to get
    * the entire row to link out to article onhover / onclick
  */
  if (props.className.includes('notion-page-link') && pageTitle === 'Media') {
    let properties

    if (props.className === 'notion-list-item notion-page-link') {
      properties = props.children[0].props.children.props.block.properties
    } else properties = props.children.props.block.properties

    const newHref = properties['2507ec7d-729d-47ec-b210-c62e3c406a7d'][0][0]

    return <a href={newHref} target="_blank" rel="noreferrer" {...props} />
  }

  return (
    <Link
      href={`${href}`}
      as={as}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
    >
      <a {...props} />
    </Link>
  )
}
