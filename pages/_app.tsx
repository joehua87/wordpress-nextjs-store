import '../styles/globals.css'
import '../styles/rich-text.css'
import '../styles/custom.css'

import type { AppProps } from 'next/app'
import Router from 'next/router'
import { DesktopHeader } from '../components/DesktopHeader'
import { BottomNav } from '../components/BottomNav'
import { useCart } from '../hooks/useCart'
import { useEffect } from 'react'

if (typeof window !== 'undefined') {
  import('topbar').then(({ default: topbar }) => {
    let loading = false
    Router.events.on('routeChangeStart', (url) => {
      loading = true
      setTimeout(() => {
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
  const { fetch } = useCart()

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <div>
      <DesktopHeader />
      <main className="">
        <Component {...pageProps} />
      </main>
      <BottomNav />
    </div>
  )
}
export default MyApp
