import { IconChevronDown } from '@tabler/icons'
import Link from 'next/link'

export function DesktopHeader() {
  return (
    <header className="bg-gray-100 items-center hidden lg:flex border-b border-gray-200 shadow-sm">
      <nav className="container">
        <Link href="/">
          <a className="desktop-nav-lv-1">
            Home <IconChevronDown className="w-4 h-4 text-gray-500" />
          </a>
        </Link>
        <Link href="/products">
          <a className="desktop-nav-lv-1">Products</a>
        </Link>
        <Link href="/g/nam">
          <a className="desktop-nav-lv-1">Nam</a>
        </Link>
        <Link href="/g/nu">
          <a className="desktop-nav-lv-1">Nữ</a>
        </Link>
        <Link href="/g/be-trai">
          <a className="desktop-nav-lv-1">Bé trai</a>
        </Link>
        <Link href="/g/be-gai">
          <a className="desktop-nav-lv-1">Bé gái</a>
        </Link>
        <Link href="/posts">
          <a className="desktop-nav-lv-1">Posts</a>
        </Link>
        <Link href="/search">
          <a className="desktop-nav-lv-1">Tìm kiếm</a>
        </Link>
        <Link href="/cart">
          <a className="desktop-nav-lv-1">Giỏ hàng</a>
        </Link>
      </nav>
    </header>
  )
}
