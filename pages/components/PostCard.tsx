import Image from 'next/image'
import { PostCardFragment } from '../../generated/graphql'

export function PostCard({ entity }: { entity: PostCardFragment }) {
  return (
    <div className="border rounded shadow-sm hover:shadow-lg">
      <div className="relative aspect-w-1 aspect-h-1">
        <Image
          src={
            entity.featuredImage?.node?.sourceUrl ||
            'http://docker:8080/wp-content/uploads/woocommerce-placeholder.png'
          }
          alt={entity.title || undefined}
          layout="fill"
        />
      </div>
      <div className="border-t py-1 px-2">
        <div>{entity.title}</div>
      </div>
    </div>
  )
}
