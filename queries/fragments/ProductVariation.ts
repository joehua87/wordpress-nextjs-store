import { gql } from '@urql/core'

export const ProductVariationFragment = gql`
  fragment ProductVariation on ProductVariation {
    id
    regularPrice
    salePrice
    price
    status
    stockQuantity
    stockStatus
    featuredImageId
    attributes {
      nodes {
        id
        attributeId
        name
        label
        value
      }
    }
  }
`
