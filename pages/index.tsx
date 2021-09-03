import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import { HomePageQuery } from '../generated/graphql'
import { PostCardList } from '../components/PostCardList'
import { ProductCardList } from '../components/ProductCardList'
import { edgesToList, getHost } from '../utils'

const Home: NextPage<{ data: HomePageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>{data.allSettings?.generalSettingsTitle}</title>
        <meta
          name="description"
          content={data.allSettings?.generalSettingsDescription || ''}
        />
      </Head>
      {data.posts && <PostCardList entities={edgesToList(data.posts)} />}
      <div>
        {data.productCategories?.edges?.map((item) => {
          if (!item?.node?.products) {
            return null
          }

          return (
            <div key={item?.node?.id} className="mb-8">
              <h2 className="font-bold text-lg mb-2">{item?.node?.name}</h2>
              <ProductCardList entities={edgesToList(item.node.products)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`${getHost(context)}/api`)
  const { data } = await res.json()
  return { props: { data } }
}
