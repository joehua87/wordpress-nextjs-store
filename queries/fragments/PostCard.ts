import { gql } from '@urql/core'
import { MediaItemFragment } from './MediaItem'

export const PostCardFragment = gql`
  fragment PostCard on Post {
    id
    slug
    title
    date
    modified
    author {
      node {
        id
        name
      }
    }
    categories {
      nodes {
        id
        link
        name
      }
    }
    tags {
      nodes {
        id
        link
        name
      }
    }
    link
    featuredImage {
      node {
        ...MediaItem
      }
    }
    __typename
  }
  ${MediaItemFragment}
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
