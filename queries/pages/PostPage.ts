import { gql } from '@urql/core'

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
    }
  }
`
