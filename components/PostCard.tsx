import Link from 'next/link'
import { PostCardFragment } from '../generated/graphql'

export function PostCard({ entity }: { entity: PostCardFragment }) {
  const href = entity.link && new URL(entity.link).pathname
  return (
    <Link href={href as string}>
      <a className="border rounded shadow-sm hover:shadow-lg">
        <div className="relative aspect-w-1 aspect-h-1">
          <img
            loading="lazy"
            src={
              entity.featuredImage?.node?.sourceUrl ||
              'http://docker:8080/wp-content/uploads/woocommerce-placeholder.png'
            }
            alt={entity.title || undefined}
          />
        </div>
        <div className="border-t py-1 px-2">
          <div>{entity.title}</div>
        </div>
      </a>
    </Link>
  )
}
