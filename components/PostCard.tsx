import Link from 'next/link'
import { PostCardFragment } from '../generated/graphql'

export function PostCard({ entity }: { entity: PostCardFragment }) {
  const href = entity.link && new URL(entity.link).pathname
  return (
    <Link href={href as string}>
      <a className="border rounded shadow-sm hover:shadow-lg">
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            loading="lazy"
            className="object-cover"
            src={
              entity.featuredImage?.node?.mediumUrl ||
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
