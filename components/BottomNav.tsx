import Link from 'next/link'
import {
  IconHome,
  IconPackage,
  IconShoppingCart,
  IconUser,
} from '@tabler/icons'

export function BottomNav() {
  return (
    <nav className="bg-rose-100 h-12 fixed bottom-0 items-center grid grid-cols-5 gap-2 lg:hidden w-full">
      <Link href="/">
        <a className="flex flex-col items-center">
          <IconHome />
          <span className="text-center text-xs">Trang chủ</span>
        </a>
      </Link>
      <Link href="/products">
        <a className="flex flex-col items-center">
          <IconPackage />
          <span className="text-center text-xs">Sản phẩm</span>
        </a>
      </Link>
      <Link href="/sale">
        <a className="flex flex-col items-center relative">
          <IconPackage />
          <span className="text-center text-xs">Sale</span>
          <span
            className="bg-red-600 text-white absolute top-0 right-0 px-0.5 rounded font-bold uppercase"
            style={{ fontSize: 8 }}
          >
            Sale
          </span>
        </a>
      </Link>
      <Link href="/user">
        <a className="flex flex-col items-center">
          <IconUser />
          <span className="text-center text-xs">Tài khoản</span>
        </a>
      </Link>
      <Link href="/cart">
        <a className="flex flex-col items-center">
          <IconShoppingCart />
          <span className="text-center text-xs">Giỏ hàng</span>
        </a>
      </Link>
    </nav>
  )
}
