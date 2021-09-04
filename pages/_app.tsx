import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Router from 'next/router'

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
      <header className="bg-rose-100 h-12 flex items-center">
        <nav className="container mx-auto">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/products">
            <a className="ml-2">Products</a>
          </Link>
          <Link href="/posts">
            <a className="ml-2">Posts</a>
          </Link>
        </nav>
      </header>
      <main className="">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
export default MyApp
