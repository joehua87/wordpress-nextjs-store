import { gql } from '@urql/core'

export const ProductCardFragment = gql`
  fragment ProductCard on Product {
    id
    slug
    link
    name
    featured
    image {
      sourceUrl(size: MEDIUM)
    }
    attributes {
      nodes {
        id
        label
        name
      }
    }
    ... on SimpleProduct {
      salePrice
      regularPrice
      price
    }
    ... on VariableProduct {
      salePrice
      regularPrice
      price
    }
    ... on ExternalProduct {
      salePrice
      regularPrice
      price
    }
    __typename
  }
`

export const ProductCardListFragment = gql`
  fragment ProductCardList on ProductCategoryToProductConnection {
    edges {
      node {
        ...ProductCard
      }
    }
  }
  ${ProductCardFragment}
`
