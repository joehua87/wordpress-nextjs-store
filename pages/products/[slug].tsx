import type { GetStaticPaths, NextPage, GetStaticProps } from 'next'
import {
  ProductPageQuery,
  ProductPageQueryVariables,
} from '../../generated/graphql'
import { EntitySeo } from '../../components/EntitySeo'
import { fetchData, notEmpty } from '../../utils'
import { queries } from '../../queries/queries'
import ProductSlider from '../../components/ProductSlider'
import { ProductCardList } from '../../components/ProductCardList'
import { uniqBy } from 'ramda'
import { ProductPrice } from '../../components/ProductPrice'
import { VariableProductOrderForm } from '../../components/VariableProductOrderForm'

const Product: NextPage<{ data: ProductPageQuery }> = ({ data }) => {
  const { product } = data
  if (!product) {
    return <div>Product not found</div>
  }

  const relatedProducts = product?.related?.nodes?.filter(notEmpty)

  const images = uniqBy(
    (x) => x?.id,
    [...(product?.galleryImages?.nodes || []), product?.image],
  ).filter(notEmpty)

  return (
    <div className="container">
      <EntitySeo entity={product?.seo} />
      <div className="flex flex-wrap mt-4">
        <div className="w-full lg:w-3/5">
          <ProductSlider key={product?.id} images={images} />
        </div>
        <div className="w-full lg:w-2/5 lg:pl-4">
          <h1 className="text-2xl font-serif">{product?.name}</h1>
          {product && <ProductPrice entity={product} />}
          {product.__typename === 'VariableProduct' && (
            <VariableProductOrderForm product={product} />
          )}
        </div>
      </div>
      {relatedProducts && (
        <div className="mt-8">
          <h2 className="text-xl font-serif font-bold mb-2">
            Sản phẩm liên quan
          </h2>
          <ProductCardList entities={relatedProducts} />
        </div>
      )}
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
