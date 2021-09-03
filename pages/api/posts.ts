import type { NextApiRequest, NextApiResponse } from 'next'
import { graphqlEndpoint } from '../../config'
import { PostsPageQuery } from '../../queries/pages/PostsPage'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const result = await fetch(graphqlEndpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify({
      query: PostsPageQuery.loc?.source.body,
      variables: {
        where: {},
      },
    }),
  })
  const response = await result.json()
  res.status(result.status).json(response)
}
