import Link from 'next/link'

export function DesktopHeader() {
  return (
    <header className="bg-rose-100 h-12 flex items-center">
      <nav className="container mx-auto">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a className="ml-2">Products</a>
        </Link>
        <Link href="/g/nam">
          <a className="ml-2">Nam</a>
        </Link>
        <Link href="/g/nu">
          <a className="ml-2">Nữ</a>
        </Link>
        <Link href="/g/be-trai">
          <a className="ml-2">Bé trai</a>
        </Link>
        <Link href="/g/be-gai">
          <a className="ml-2">Bé gái</a>
        </Link>
        <Link href="/posts">
          <a className="ml-2">Posts</a>
        </Link>
      </nav>
    </header>
  )
}
