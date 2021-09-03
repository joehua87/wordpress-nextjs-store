import type { NextPage } from 'next'
import { PostCardList } from '../../components/PostCardList'
import { host } from '../../config'
import { PostsPageQuery } from '../../generated/graphql'
import { edgesToList } from '../../utils'

const Posts: NextPage<{ data: PostsPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <PostCardList entities={edgesToList(data.posts)} />
    </div>
  )
}

export default Posts

export async function getServerSideProps() {
  const res = await fetch(`${host}/api/posts`)
  const { data } = await res.json()
  return { props: { data } }
}
