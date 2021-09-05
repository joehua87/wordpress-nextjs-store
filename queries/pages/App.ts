import { gql } from '@urql/core'

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
        id
        slug
        name
        termTaxonomyId
        __typename
      }
    }
  }
`
