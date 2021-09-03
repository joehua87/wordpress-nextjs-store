import Head from 'next/head'
import type { GetServerSidePropsContext, NextPage } from 'next'
import { PostCardList } from '../../components/PostCardList'

import { PostsPageQuery } from '../../generated/graphql'
import { edgesToList, getHost } from '../../utils'

const Posts: NextPage<{ data: PostsPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Posts</title>
        <meta name="description" content="Post list" />
      </Head>
      <PostCardList entities={edgesToList(data.posts)} />
    </div>
  )
}

export default Posts

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`${getHost(context)}/api/posts`)
  const { data } = await res.json()
  return { props: { data } }
}
