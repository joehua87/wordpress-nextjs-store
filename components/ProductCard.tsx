import Image from 'next/image'
import Link from 'next/link'
import { ProductCardFragment } from '../generated/graphql'
import { ProductPrice } from './ProductPrice'

export function ProductCard({ entity }: { entity: ProductCardFragment }) {
  const href = entity.link && new URL(entity.link).pathname
  return (
    <Link href={href as string}>
      <a className="border rounded shadow-sm hover:shadow-lg">
        <div className="relative aspect-w-1 aspect-h-1">
          <Image
            src={
              entity.image?.sourceUrl ||
              'http://docker:8080/wp-content/uploads/woocommerce-placeholder.png'
            }
            alt={entity.name || undefined}
            layout="fill"
          />
        </div>
        <div className="border-t py-1 px-2">
          <div>{entity.name}</div>
          <div>
            <ProductPrice entity={entity} />
          </div>
        </div>
      </a>
    </Link>
  )
}
