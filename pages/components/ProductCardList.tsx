import { ProductCardListFragment } from '../../generated/graphql'
import { ProductCard } from './ProductCard'

export function ProductCardList({ data }: { data: ProductCardListFragment }) {
  return (
    <div className="grid gap-2 grid-cols-2 lg:gap-4 lg:grid-cols-4 xl:grid-cols-6">
      {data.edges?.map(
        (product) =>
          product?.node && (
            <ProductCard key={product.node.id} entity={product.node} />
          ),
      )}
    </div>
  )
}
