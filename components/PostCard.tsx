import Link from 'next/link'
import { PostCardFragment } from '../generated/graphql'
import DewImage from './DewImage'

export function PostCard({ entity }: { entity: PostCardFragment }) {
  const href = entity.link && new URL(entity.link).pathname
  return (
    <div>
      <Link href={href as string}>
        <a className="">
          <div className="relative aspect-w-4 aspect-h-3">
            <DewImage
              loading="lazy"
              className=""
              src={entity.featuredImage?.node?.mediumLargeUrl}
              layout="fill"
              alt={entity.title || undefined}
            />
          </div>
        </a>
      </Link>
      <div className="">
        <div className="">Fashion</div>
        <div>{entity.title}</div>
      </div>
      {/* {entity.categories?.nodes?.name} */}
      {/* {entity.date} */}
      {/* {entity.author?.node?.name} */}
    </div>
  )
}
