import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header className="bg-rose-100 h-12 flex items-center">
        <nav className="container mx-auto">
          <Link href="/">
            <a>Home</a>
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
