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

const Home: NextPage<{ data: THomePageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>{data.allSettings?.generalSettingsTitle}</title>
        <meta
          name="description"
          content={data.allSettings?.generalSettingsDescription || ''}
        />
      </Head>
      <div className="mt-4">
        <h2 className="font-bold text-xl mb-2">Posts</h2>
        {data.posts && <PostCardList entities={edgesToList(data.posts)} />}
      </div>
      <div className="mt-4">
        {data.productCategories?.edges?.map((item) => {
          if (!item?.node?.products) {
            return null
          }

          return (
            <div key={item?.node?.id} className="mb-8">
              <h3 className="font-semibold text-lg mb-2">{item?.node?.name}</h3>
              <ProductCardList entities={edgesToList(item.node.products)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await fetchData<
    HomePageQuery,
    HomePageQueryVariables
  >(queries.HomePageQuery, {})
  return { props: data ? { data } : { error }, revalidate: 10 }
}
