import { gql } from '@urql/core'

export const MediaItemFragment = gql`
  fragment MediaItem on MediaItem {
    id
    altText
    title
    sourceUrl
    mediumUrl: sourceUrl(size: MEDIUM)
    mediumLargeUrl: sourceUrl(size: MEDIUM_LARGE)
    largeUrl: sourceUrl(size: LARGE)
  }
`
