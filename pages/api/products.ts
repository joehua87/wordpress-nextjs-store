import type { NextApiRequest, NextApiResponse } from 'next'
import { graphqlEndpoint } from '../../config'
import { TaxonomyEnum, TaxonomyOperatorEnum } from '../../generated/graphql'
import { ProductsPageQuery } from '../../queries/pages/ProductsPage'

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
      query: ProductsPageQuery.loc?.source.body,
      variables: {
        where: {
          taxonomyFilter: {
            relation: 'AND',
            filters: [
              // {
              //   taxonomy: TaxonomyEnum.Pacolor,
              //   operator: TaxonomyOperatorEnum.In,
              //   terms: ['blue'],
              // },
            ],
          },
        },
      },
    }),
  })
  const response = await result.json()
  res.status(result.status).json(response)
}
