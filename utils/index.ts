import { GetServerSidePropsContext } from 'next'

export function notEmpty<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined
}

export function edgesToList<T>(data?: { edges?: any[] | null } | null): T[] {
  return data?.edges?.map((x: any) => x.node)?.filter(notEmpty) || []
}

export function getHost(context: GetServerSidePropsContext) {
  const schema = context.req.headers.referer
    ? new URL(context.req.headers.referer).protocol
    : 'http:'
  const host = `${schema}//${context.req.headers.host}`
  return host
}
