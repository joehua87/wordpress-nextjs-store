import type { GetServerSidePropsContext, NextPage } from 'next'
import { host } from '../../config'
import { PostPageQuery } from '../../generated/graphql'
import { Toc } from '../../components/Toc'

const Post: NextPage<{ data: PostPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <h1>{data.post?.title}</h1>
      <Toc content={data.post?.content} />
      <div dangerouslySetInnerHTML={{ __html: data.post?.content || '' }} />
    </div>
  )
}

export default Post

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`${host}/api/post?slug=${context.query.slug}`)
  const { data } = await res.json()
  return { props: { data } }
}
