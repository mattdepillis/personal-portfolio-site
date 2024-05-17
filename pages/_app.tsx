// katex equation styling
import 'katex/dist/katex.min.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-coy.css'

// global style overrides for prism theme (optional)
import '../styles/prism-theme.css'

// prismjs styles
import 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// global styles for starter kit site
import '../styles/global.css'

// custom homepage styles
import '../styles/home.css'

// global style overrides for notion
import '../styles/notion.css'

// fontawesome config
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const PortfolioSite = ({ Component, pageProps }) =>
  <Component {...pageProps} />

export default PortfolioSite
