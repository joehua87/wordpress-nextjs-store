import Link from 'next/link'
import { PostCardFragment } from '../generated/graphql'
import DewImage from './DewImage'

export function PostCard({ entity }: { entity: PostCardFragment }) {
  const href = entity.link && new URL(entity.link).pathname
  return (
    <Link href={href as string}>
      <a className="border rounded shadow-sm hover:shadow-lg">
        <div className="relative aspect-w-4 aspect-h-3">
          <DewImage
            loading="lazy"
            className="object-cover"
            src={entity.featuredImage?.node?.mediumLargeUrl}
            layout="fill"
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
