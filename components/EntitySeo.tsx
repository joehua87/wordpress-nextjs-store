import { EntitySeoFragment } from '../generated/graphql'
import Head from 'next/head'

export function EntitySeo({ entity }: { entity?: EntitySeoFragment | null }) {
  if (!entity) {
    return null
  }
  return (
    <Head>
      <title>{entity.title}</title>
      <meta name="description" content={entity.metaDesc || ''} />
      <meta name="keywords" content={entity.metaKeywords || ''} />
    </Head>
  )
}
