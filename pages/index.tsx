import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import type {
  HomePageQuery as THomePageQuery,
  HomePageQuery,
  HomePageQueryVariables,
} from '../generated/graphql'
import { PostCardList } from '../components/PostCardList'
import { ProductCardList } from '../components/ProductCardList'
import { edgesToList, fetchData } from '../utils'
import { queries } from '../queries/queries'
import { parseBlocks } from '../utils/block'
import 'keen-slider/keen-slider.min.css'
import React from 'react'
import { Carousel } from '../components/Carousel'
import { Gallery } from '../types'

const Home: NextPage<{
  data: THomePageQuery
  blocks: Record<string, any>
  now: number
}> = ({ data, blocks, now }) => {
  const slider = blocks['home-slider'] as Gallery

  return (
    <>
      <Head>
        <title>{data.allSettings?.generalSettingsTitle}</title>
        <meta
          name="description"
          content={data.allSettings?.generalSettingsDescription || ''}
        />
      </Head>
      <Carousel gallery={slider} />
      <div className="container">
        <div>{new Date(now).toJSON()}</div>
        <div className="mt-4">
          {data.productCategories?.edges?.map((item) => {
            if (!item?.node?.products) {
              return null
            }

            return (
              <div key={item?.node?.id} className="mb-8">
                <h3 className="font-semibold text-lg mb-2">
                  {item?.node?.name}
                </h3>
                <ProductCardList entities={edgesToList(item.node.products)} />
              </div>
            )
          })}
        </div>
        <div className="mt-4">
          <h2 className="font-bold text-xl mb-2">Posts</h2>
          {data.posts && <PostCardList entities={edgesToList(data.posts)} />}
        </div>
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await fetchData<
    HomePageQuery,
    HomePageQueryVariables
  >(queries.HomePageQuery, {})
  // const snap1 = Date.now()
  const blocks = parseBlocks(data?.config?.content)
  // const snap2 = Date.now()
  // console.log('parse', snap2 - snap1)
  return {
    props: data ? { data, blocks, now: Date.now() } : { error },
    revalidate: 10,
  }
}
