import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import { ProductCardList } from '../../components/ProductCardList'
import {
  ProductsPageQuery,
  ProductsPageQueryVariables,
} from '../../generated/graphql'
import { edgesToList, fetchData } from '../../utils'
import { queries } from '../../queries/queries'

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

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await fetchData<
    ProductsPageQuery,
    ProductsPageQueryVariables
  >(queries.ProductsPageQuery, {})
  return { props: data ? { data } : { error }, revalidate: 10 }
}
