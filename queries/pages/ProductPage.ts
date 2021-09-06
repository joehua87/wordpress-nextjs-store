import { gql } from '@urql/core'
import { EntitySeoFragment } from '../fragments/EntitySeo'
import { MediaItemFragment } from '../fragments/MediaItem'
import { ProductCardFragment } from '../fragments/ProductCard'
import { ProductVariationFragment } from '../fragments/ProductVariation'

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
          attributeId
          scope
          name
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
            ...ProductVariation
          }
        }
      }
    }
    __typename
  }
  ${MediaItemFragment}
  ${EntitySeoFragment}
  ${ProductCardFragment}
  ${ProductVariationFragment}
`
