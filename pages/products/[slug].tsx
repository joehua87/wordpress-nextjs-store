import type { GetServerSidePropsContext, NextPage } from 'next'
import { ProductPageQuery } from '../../generated/graphql'
import { EntitySeo } from '../../components/EntitySeo'
import { getHost } from '../../utils'

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(
    `${getHost(context)}/api/product?slug=${context.query.slug}`,
  )
  const { data } = await res.json()
  return { props: { data } }
}
