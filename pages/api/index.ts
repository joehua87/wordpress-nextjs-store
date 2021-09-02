import type { NextApiRequest, NextApiResponse } from 'next'
import { graphqlEndpoint } from '../../config'
import { HomePageQuery } from '../../queries/pages/HomePage'

// import HomePageQuery from '../../queries/pages/HomePage.gql'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const x = console.log({ HomePageQuery })

  const result = await fetch(graphqlEndpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify({ query: HomePageQuery.loc?.source.body }),
  })
  const response = await result.json()
  res.status(result.status).json(response)
}
