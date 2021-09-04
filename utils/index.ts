import { Client, TypedDocumentNode } from '@urql/core'
import { graphqlEndpoint } from '../config'

export function notEmpty<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined
}

export function edgesToList<T>(data?: { edges?: any[] | null } | null): T[] {
  return data?.edges?.map((x: any) => x.node)?.filter(notEmpty) || []
}

const client = new Client({ url: graphqlEndpoint })

export async function fetchData<T, V extends object>(
  query: TypedDocumentNode,
  variables?: V,
) {
  return client.query<T, V>(query, variables).toPromise()
}
