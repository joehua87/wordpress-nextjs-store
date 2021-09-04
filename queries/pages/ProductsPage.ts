import { gql } from '@urql/core'
import { ProductCardFragment } from '../fragments/ProductCard'

export const ProductsPageQuery = gql`
  query ProductsPage($where: RootQueryToProductConnectionWhereArgs) {
    products(where: $where) {
      edges {
        node {
          ...ProductCard
        }
      }
      pageInfo {
        total
      }
    }
  }
  ${ProductCardFragment}
`
