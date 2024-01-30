// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
import 'styles/global.css'
// this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// global style overrides for notion
import 'styles/notion.css'
// global style overrides for prism theme (optional)
import 'styles/prism-theme.css'

import 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'
import '../styles/prism-theme.css'

// import 'rc-dropdown/assets/index.css'
import 'katex/dist/katex.min.css'

// import 'react-static-tweets/styles.css'

// * custom styles
// import '../styles/globals.css'
// import '../styles/custom-css/notion-collections.css'
// import '../styles/custom-css/responsive-page-layout.css'
// import '../styles/notion.css'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const PortfolioSite = ({ Component, pageProps }) =>
  <Component {...pageProps} />

export default PortfolioSite
