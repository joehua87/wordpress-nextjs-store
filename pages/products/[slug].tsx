import type {
  GetStaticPropsContext,
  GetStaticPaths,
  NextPage,
  GetStaticProps,
} from 'next'
import {
  ProductPageQuery,
  ProductPageQueryVariables,
} from '../../generated/graphql'
import { EntitySeo } from '../../components/EntitySeo'
import { fetchData } from '../../utils'
import { queries } from '../../queries/queries'

const Product: NextPage<{ data: ProductPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <EntitySeo entity={data.product?.seo} />
      <h1 className="text-2xl font-serif">{data.product?.name}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        {data.product?.galleryImages?.nodes?.map((item) => (
          <div key={item?.sourceUrl} className="relative aspect-w-1 aspect-h-1">
            <img
              loading="lazy"
              src={
                item?.sourceUrl ||
                'http://docker:8080/wp-content/uploads/woocommerce-placeholder.png'
              }
              alt={data.product?.name || undefined}
            />
          </div>
        ))}
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
