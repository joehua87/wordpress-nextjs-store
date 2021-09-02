import { gql } from '@urql/core'
import { EntitySeoFragment } from '../fragments/EntitySeo'

export const ProductPageQuery = gql`
  query ProductPage($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      slug
      name
      image {
        sourceUrl
      }
      attributes {
        nodes {
          id
          label
          variation
          visible
          options
        }
      }
      seo {
        ...EntitySeo
      }
      ... on SimpleProduct {
        salePrice
        regularPrice
        price
      }
      ... on VariableProduct {
        variations {
          nodes {
            attributes {
              nodes {
                id
                label
                value
              }
            }
          }
        }
      }
      ... on ExternalProduct {
        salePrice
        regularPrice
        price
      }
    }
    __typename
  }
  ${EntitySeoFragment}
`
