import Link from 'next/link'
import { ProductCardFragment } from '../generated/graphql'
import DewImage from './DewImage'
import { ProductPrice } from './ProductPrice'

export function ProductCard({ entity }: { entity: ProductCardFragment }) {
  const href = entity.link && new URL(entity.link).pathname
  return (
    <Link href={href as string}>
      <a className="border rounded shadow-sm hover:shadow-lg">
        <div className="relative aspect-w-1 aspect-h-1">
          <DewImage
            loading="lazy"
            src={entity.image?.mediumUrl}
            layout="fill"
            alt={entity.name || undefined}
          />
        </div>
        <div className="border-t py-1 px-2">
          <h3 className="text-sm line-clamp-2">{entity.name}</h3>
          <div>
            <ProductPrice className="text-sm" entity={entity} />
          </div>
        </div>
      </a>
    </Link>
  )
}
