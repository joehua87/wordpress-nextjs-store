import type { NextPage } from 'next'
import Head from 'next/head'
import { host } from '../config'
import { HomePageQuery, ProductCardListFragment } from '../generated/graphql'
import { ProductCard } from './components/ProductCard'

function ProductCardList({ data }: { data: ProductCardListFragment }) {
  return (
    <div className="grid gap-2 grid-cols-2 lg:gap-4 lg:grid-cols-4 xl:grid-cols-6">
      {data.edges?.map(
        (product) =>
          product?.node && (
            <ProductCard key={product.node.id} entity={product.node} />
          ),
      )}
    </div>
  )
}

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
      <div>
        {data.productCategories?.edges?.map((item) => {
          if (!item?.node?.products) {
            return null
          }

          return (
            <div key={item?.node?.id} className="mb-8">
              <h2 className="font-bold text-lg mb-2">{item?.node?.name}</h2>
              <ProductCardList data={item.node.products} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const res = await fetch(`${host}/api`)
  const { data } = await res.json()
  return { props: { data } }
}
