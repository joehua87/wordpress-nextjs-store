export function notEmpty<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined
}

export function edgesToList<T>(data?: { edges?: any[] | null } | null): T[] {
  return data?.edges?.map((x: any) => x.node)?.filter(notEmpty) || []
}
