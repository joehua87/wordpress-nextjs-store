import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { DesktopHeader } from '../components/DesktopHeader'

if (typeof window !== 'undefined') {
  import('topbar').then(({ default: topbar }) => {
    let loading = false
    Router.events.on('routeChangeStart', (url) => {
      loading = true
      setTimeout(() => {
        console.log(`Loading: ${url}`)
        if (loading) {
          topbar.show()
        }
      }, 500)
    })
    Router.events.on('routeChangeComplete', () => {
      if (loading) {
        topbar.hide()
      }
      loading = false
    })
    Router.events.on('routeChangeError', () => {
      if (loading) {
        topbar.hide()
      }
      loading = false
    })
  })
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <DesktopHeader />
      <main className="">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
export default MyApp
