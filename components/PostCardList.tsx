import { PostCardListFragment } from '../generated/graphql'
import { PostCard } from './PostCard'

export function PostCardList({ data }: { data: PostCardListFragment }) {
  return (
    <div className="grid gap-2 grid-cols-2 lg:gap-4 lg:grid-cols-4 xl:grid-cols-6">
      {data.edges?.map(
        (post) =>
          post?.node && <PostCard key={post.node.id} entity={post.node} />,
      )}
    </div>
  )
}
