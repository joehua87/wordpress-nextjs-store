import { gql } from '@urql/core'
import { ProductCardFragment } from '../fragments/ProductCard'

export const GenderPageQuery = gql`
  query GenderPage($slug: String!) {
    products(
      where: {
        taxonomyFilter: {
          relation: AND
          filters: [{ taxonomy: GENDER, terms: [$slug] }]
        }
      }
      first: 200
    ) {
      edges {
        node {
          ...ProductCard
        }
      }
    }
  }
  ${ProductCardFragment}
`
