import type { NextApiRequest, NextApiResponse } from 'next'
import { graphqlEndpoint } from '../../config'
import { ProductPageQuery } from '../../queries/pages/ProductPage'

// import HomePageQuery from '../../queries/pages/HomePage.gql'

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
      query: ProductPageQuery.loc?.source.body,
      variables: { slug: req.query.slug },
    }),
  })
  const response = await result.json()
  res.status(result.status).json(response)
}
