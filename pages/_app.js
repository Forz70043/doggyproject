import '@/styles/globals.css'
import Layout from '@/components/layout'
//import { appWithTranslation } from '../utils/i18n'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
