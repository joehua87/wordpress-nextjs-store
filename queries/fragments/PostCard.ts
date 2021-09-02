import { gql } from '@urql/core'

export const PostCardFragment = gql`
  fragment PostCard on Post {
    id
    slug
    title
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    __typename
  }
`

export const PostCardListFragment = gql`
  fragment PostCardList on RootQueryToPostConnection {
    edges {
      node {
        ...PostCard
      }
    }
  }
  ${PostCardFragment}
`
