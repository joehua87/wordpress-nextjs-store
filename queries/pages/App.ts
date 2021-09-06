import { gql } from '@urql/core'
import { TermNodeFragment } from '../fragments/TermNode'

export const AppQuery = gql`
  query App {
    config(id: "galleries", idType: SLUG) {
      content(format: RAW)
    }
    allSettings {
      generalSettingsTitle
      generalSettingsDescription
    }
    terms(
      first: 1000
      where: {
        orderby: NAME
        order: ASC
        taxonomies: [CATEGORY, GENDER, PACOLOR, PASIZE, PRODUCTCATEGORY]
      }
    ) {
      nodes {
        ...TermNode
      }
    }
  }
  ${TermNodeFragment}
`
