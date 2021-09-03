import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Router from 'next/router'

if (typeof window !== 'undefined') {
  import('topbar').then(({ default: topbar }) => {
    Router.events.on('routeChangeStart', (url) => {
      console.log(`Loading: ${url}`)
      topbar.show()
    })
    Router.events.on('routeChangeComplete', () => topbar.hide())
    Router.events.on('routeChangeError', () => topbar.hide())
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
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
export default MyApp
