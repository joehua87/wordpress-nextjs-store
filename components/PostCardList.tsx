import { PostCardFragment } from '../generated/graphql'
import { PostCard } from './PostCard'

export function PostCardList({ entities }: { entities: PostCardFragment[] }) {
  return (
    <div className="grid gap-2 grid-cols-2 lg:gap-4 lg:grid-cols-4 xl:grid-cols-6">
      {entities.map((post) => post && <PostCard key={post.id} entity={post} />)}
    </div>
  )
}
