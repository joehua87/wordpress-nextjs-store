import { gql } from '@urql/core'
import { ProductCardFragment } from '../fragments/ProductCard'

export const ProductsPageQuery = gql`
  query ProductsPage($where: RootQueryToProductConnectionWhereArgs) {
    terms(first: 500) {
      pageInfo {
        total
      }
      nodes {
        __typename
        id
        termGroupId
        termTaxonomyId
        name
        ... on PaColor {
          id
          name
          count
        }
        ... on PaSize {
          id
          name
          count
        }
        slug
      }
    }
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
