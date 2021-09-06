import { gql } from '@urql/core'
import { EntitySeoFragment } from '../fragments/EntitySeo'
import { MediaItemFragment } from '../fragments/MediaItem'
import { ProductCardFragment } from '../fragments/ProductCard'

export const ProductPageQuery = gql`
  query ProductPage($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      ...ProductCard
      galleryImages {
        nodes {
          ...MediaItem
        }
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
      related(first: 12) {
        nodes {
          ...ProductCard
        }
      }
      ... on VariableProduct {
        salePrice
        regularPrice
        price
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
    }
    __typename
  }
  ${MediaItemFragment}
  ${EntitySeoFragment}
  ${ProductCardFragment}
`
