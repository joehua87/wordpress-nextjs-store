import {
  ProductCardFragment,
  ProductCardListFragment,
} from '../generated/graphql'
import { ProductCard } from './ProductCard'

export function ProductCardList({
  entities,
}: {
  entities: ProductCardFragment[]
}) {
  return (
    <div className="grid gap-2.5 grid-cols-2 lg:gap-4 lg:grid-cols-4">
      {entities.map((entity) => (
        <ProductCard key={entity.id} entity={entity} />
      ))}
    </div>
  )
}
