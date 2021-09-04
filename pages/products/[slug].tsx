import type { GetStaticPaths, NextPage, GetStaticProps } from 'next'
import {
  ProductPageQuery,
  ProductPageQueryVariables,
} from '../../generated/graphql'
import { EntitySeo } from '../../components/EntitySeo'
import { fetchData, notEmpty } from '../../utils'
import { queries } from '../../queries/queries'
import ProductSlider from '../../components/ProductSlider'

const Product: NextPage<{ data: ProductPageQuery }> = ({ data }) => {
  const images = data.product?.galleryImages?.nodes
    ?.map((x) => x?.sourceUrl)
    .filter(notEmpty)
  return (
    <div className="container mx-auto">
      <EntitySeo entity={data.product?.seo} />
      <div className="flex mt-4">
        <div className="w-full lg:w-3/5">
          <ProductSlider
            images={data.product?.galleryImages?.nodes?.filter(notEmpty) || []}
          />
        </div>
        <div className="w-full lg:w-2/5 lg:pl-4">
          <h1 className="text-2xl font-serif">{data.product?.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default Product

export const getStaticProps: GetStaticProps = async (context) => {
  const { data, error } = await fetchData<
    ProductPageQuery,
    ProductPageQueryVariables
  >(queries.ProductPageQuery, { slug: context.params?.slug as string })
  return { props: data ? { data } : { error }, revalidate: 10 }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
