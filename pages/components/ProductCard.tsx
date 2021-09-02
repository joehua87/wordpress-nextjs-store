import Image from 'next/image'
import { ProductCardFragment } from '../../generated/graphql'
import { ProductPrice } from './ProductPrice'

export function ProductCard({ entity }: { entity: ProductCardFragment }) {
  console.log(entity.__typename)
  return (
    <div className="border shadow-sm hover:shadow-lg">
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
      <div className="py-1 px-2">
        <div>{entity.name}</div>
        <div>
          <ProductPrice entity={entity} />
        </div>
      </div>
    </div>
  )
}
