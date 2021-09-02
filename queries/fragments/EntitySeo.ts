import { gql } from '@urql/core'

export const EntitySeoFragment = gql`
  fragment EntitySeo on PostTypeSEO {
    title
    metaDesc
    metaKeywords
    opengraphDescription
    opengraphImage {
      sourceUrl
    }
    breadcrumbs {
      text
      url
    }
    schema {
      raw
    }
  }
`
