import { gql } from '@urql/core'

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
