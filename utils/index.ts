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

export function parseSetCookie(headers: Headers) {
  const v = headers.get('set-cookie')
  if (!v) {
    return []
  }
  return v.split(/, /g).reduce((acc: string[], item) => {
    if (
      item.match(/^\d{2}-\w{3}-\d{4}/) &&
      acc[acc.length - 1].match(/expires=\w{3}$/)
    ) {
      acc[acc.length - 1] = acc[acc.length - 1] + ' ' + item
      return acc
    }
    return [...acc, item]
  }, [])
}
