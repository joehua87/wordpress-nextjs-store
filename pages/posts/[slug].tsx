import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PostPageQuery, PostPageQueryVariables } from '../../generated/graphql'
import { Toc } from '../../components/Toc'
import { EntitySeo } from '../../components/EntitySeo'
import { fetchData } from '../../utils'
import { queries } from '../../queries/queries'
import React from 'react'
import Head from 'next/head'

const Post: NextPage<{ data: PostPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      {/* <Head>
        <link
          rel="stylesheet"
          id="wp-block-library-css"
          href="https://admin.wordpress-demo.dew.vn/wp-includes/css/dist/block-library/style.min.css?ver=5.8"
          media="all"
        />
      </Head> */}
      <EntitySeo entity={data.post?.seo} />
      <h1 className="text-2xl font-serif">{data.post?.title}</h1>
      <Toc content={data.post?.content} />
      <div
        dangerouslySetInnerHTML={{ __html: data.post?.content || '' }}
        className="rich-text"
      />
    </div>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async (context) => {
  const { data, error } = await fetchData<
    PostPageQuery,
    PostPageQueryVariables
  >(queries.PostPageQuery, { slug: context.params?.slug as string })
  return { props: data ? { data } : { error }, revalidate: 10 }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
