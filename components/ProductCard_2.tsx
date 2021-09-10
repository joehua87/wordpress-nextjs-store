import { IconHeart, IconStar } from '@tabler/icons'
import Link from 'next/link'
import { ProductCardFragment } from '../generated/graphql'
import DewImage from './DewImage'
import { ProductPrice } from './ProductPrice'

export function ProductCard_2({ entity }: { entity: ProductCardFragment }) {
  const href = entity.link && new URL(entity.link).pathname
  return (
    <Link href={href as string}>
      <a className="product-card border-2 border-transparent hover:border-blue-700 p-2 border-dashed transition">
        <div className="relative aspect-w-1 aspect-h-1">
          <DewImage
            loading="lazy"
            src={entity.image?.mediumUrl}
            layout="fill"
            alt={entity.name || undefined}
          />
        </div>
        <div className="mt-4 flex items-center text-gray-600">
          <IconHeart className="w-4 h-4" />
          <span className="ml-1">0</span>
        </div>
        <div className="mt-3">
          <h3 className="text-sm line-clamp-2 w-2/3">{entity.name}</h3>
          <div className="mt-1">
            <ProductPrice className="text-sm" entity={entity} />
          </div>
        </div>
        <div className="mt-1 flex">
          <IconStar className="w-4 h-4 text-yellow-500" />
          <IconStar className="w-4 h-4 text-yellow-500" />
          <IconStar className="w-4 h-4 text-yellow-500" />
          <IconStar className="w-4 h-4 text-yellow-500" />
          <IconStar className="w-4 h-4 text-gray-300" />
        </div>
      </a>
    </Link>
  )
}
