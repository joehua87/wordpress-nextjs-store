import { gql } from '@urql/core'

export const TermNodeFragment = gql`
  fragment TermNode on TermNode {
    id
    slug
    name
    termTaxonomyId
    __typename
  }
`
