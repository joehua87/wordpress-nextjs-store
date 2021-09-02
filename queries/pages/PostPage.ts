import { gql } from '@urql/core'
import { EntitySeoFragment } from '../fragments/EntitySeo'

export const PostPageQuery = gql`
  query PostPage($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      content(format: RENDERED)
      seo {
        ...EntitySeo
      }
    }
  }
  ${EntitySeoFragment}
`
