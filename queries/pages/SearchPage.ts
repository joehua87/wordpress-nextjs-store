import { gql } from '@urql/core'
import { ProductCardFragment } from '../fragments/ProductCard'

export const SearchPageQuery = gql`
  query SearchPage($where: RootQueryToProductConnectionWhereArgs) {
    products(where: $where, first: 24) {
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
