import { gql } from '@urql/core'
import { PostCardFragment } from '../fragments/PostCard'

export const PostsPageQuery = gql`
  query PostsPage($where: RootQueryToPostConnectionWhereArgs) {
    posts(where: $where) {
      edges {
        node {
          ...PostCard
        }
      }
      pageInfo {
        total
      }
    }
  }
  ${PostCardFragment}
`
