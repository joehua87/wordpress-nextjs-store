import type { GetServerSidePropsContext, NextPage } from 'next'
import { PostPageQuery } from '../../generated/graphql'
import { Toc } from '../../components/Toc'
import { EntitySeo } from '../../components/EntitySeo'
import { getHost } from '../../utils'

const Post: NextPage<{ data: PostPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <EntitySeo entity={data.post?.seo} />
      <h1 className="text-2xl font-serif">{data.post?.title}</h1>
      <Toc content={data.post?.content} />
      <div dangerouslySetInnerHTML={{ __html: data.post?.content || '' }} />
    </div>
  )
}

export default Post

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(
    `${getHost(context)}/api/post?slug=${context.query.slug}`,
  )
  const { data } = await res.json()
  return { props: { data } }
}
