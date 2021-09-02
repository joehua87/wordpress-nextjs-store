import { gql } from '@urql/core'
import { PostCardListFragment } from '../fragments/PostCard'
import { ProductCardListFragment } from '../fragments/ProductCard'

export const HomePageQuery = gql`
  query HomePage {
    allSettings {
      generalSettingsTitle
      generalSettingsDescription
    }
    posts {
      ...PostCardList
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
  ${PostCardListFragment}
`
