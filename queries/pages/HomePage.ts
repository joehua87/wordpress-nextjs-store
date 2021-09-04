import { gql } from '@urql/core'
import { PostCardListFragment } from '../fragments/PostCard'
import { ProductCardListFragment } from '../fragments/ProductCard'

export const HomePageQuery = gql`
  query HomePage {
    config(id: "galleries", idType: SLUG) {
      content(format: RAW)
    }
    allSettings {
      generalSettingsTitle
      generalSettingsDescription
    }
    posts(first: 6) {
      ...PostCardList
    }
    productCategories(first: 2) {
      edges {
        node {
          id
          name
          products(first: 6) {
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
