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
    <div className="">
      {entities.map((entity) => (
        <ProductCard key={entity.id} entity={entity} />
      ))}
    </div>
  )
}
