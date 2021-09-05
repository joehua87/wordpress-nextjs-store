import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import { PostCardList } from '../../components/PostCardList'

import {
  PostsPageQuery,
  PostsPageQueryVariables,
} from '../../generated/graphql'
import { edgesToList, fetchData } from '../../utils'
import { queries } from '../../queries/queries'

const Posts: NextPage<{ data: PostsPageQuery }> = ({ data }) => {
  return (
    <div className="container">
      <Head>
        <title>Posts</title>
        <meta name="description" content="Post list" />
      </Head>
      <PostCardList entities={edgesToList(data.posts)} />
    </div>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await fetchData<
    PostsPageQuery,
    PostsPageQueryVariables
  >(queries.PostsPageQuery, {})
  return { props: data ? { data } : { error }, revalidate: 10 }
}
