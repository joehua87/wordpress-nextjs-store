import Head from 'next/head'
import type { GetServerSidePropsContext, NextPage } from 'next'
import { ProductCardList } from '../../components/ProductCardList'
import { ProductsPageQuery } from '../../generated/graphql'
import { edgesToList, getHost } from '../../utils'

const Products: NextPage<{ data: ProductsPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Products</title>
        <meta name="description" content="Product list" />
      </Head>
      <ProductCardList entities={edgesToList(data.products)} />
    </div>
  )
}

export default Products

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`${getHost(context)}/api/products`)
  const { data } = await res.json()
  return { props: { data } }
}
