import { gql } from '@urql/core'
import { PostCardListFragment } from '../fragments/PostCard'
import { ProductCardListFragment } from '../fragments/ProductCard'

export const HomePageQuery = gql`
  query HomePage {
    genders {
      nodes {
        id
        name
        slug
      }
    }
    categories(first: 100) {
      nodes {
        id
        name
        slug
      }
    }
    paSizes(first: 100) {
      nodes {
        id
        name
        slug
      }
    }
    paColors(first: 100) {
      nodes {
        id
        name
        slug
      }
    }
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
        slug
      }
    }
    allSettings {
      generalSettingsTitle
      generalSettingsDescription
    }
    posts(first: 6) {
      ...PostCardList
    }
    productCategories(first: 100) {
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
