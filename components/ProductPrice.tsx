import { ProductCardFragment } from '../generated/graphql'

export function ProductPrice({ entity }: { entity: ProductCardFragment }) {
  if (entity.__typename === 'GroupProduct') {
    return null
  }
  return (
    <div className="flex">
      {entity.regularPrice !== entity.price && (
        <div className="mr-2 line-through">{entity.regularPrice}</div>
      )}
      <div className="font-bold">{entity.price}</div>
    </div>
  )
}
