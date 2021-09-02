import { gql } from '@urql/core'
import { ProductCardListFragment } from '../fragments/ProductCard'

export const HomePageQuery = gql`
  query HomePage {
    allSettings {
      generalSettingsTitle
      generalSettingsDescription
    }
    productCategories {
      edges {
        node {
          id
          name
          products {
            ...ProductCardList
          }
        }
      }
      pageInfo {
        startCursor
        hasPreviousPage
        hasNextPage
        endCursor
      }
    }
  }
  ${ProductCardListFragment}
`
