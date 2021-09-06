import clsx from 'clsx'
import {
  ProductCardFragment,
  ProductVariationFragment,
} from '../generated/graphql'

export function ProductPrice({
  entity,
  className,
}: {
  entity: ProductCardFragment | ProductVariationFragment
  className?: string
}) {
  if (entity.__typename === 'GroupProduct') {
    return null
  }
  return (
    <div className={clsx('flex', className)}>
      {entity.regularPrice !== entity.price && (
        <div className="mr-2 line-through">{entity.regularPrice}</div>
      )}
      <div className="font-bold">{entity.price}</div>
    </div>
  )
}
