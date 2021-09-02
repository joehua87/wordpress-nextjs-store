import type { GetServerSidePropsContext, NextPage } from 'next'
import { host } from '../../config'
import { ProductPageQuery } from '../../generated/graphql'
import { EntitySeo } from '../../components/EntitySeo'

const Product: NextPage<{ data: ProductPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <EntitySeo entity={data.product?.seo} />
      <h1 className="text-2xl font-serif">{data.product?.name}</h1>
    </div>
  )
}

export default Product

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`${host}/api/product?slug=${context.query.slug}`)
  const { data } = await res.json()
  return { props: { data } }
}
