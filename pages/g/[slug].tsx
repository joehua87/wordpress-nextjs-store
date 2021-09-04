import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import {
  GenderPageQuery,
  GenderPageQueryVariables,
} from '../../generated/graphql'
import { edgesToList, fetchData } from '../../utils'
import { queries } from '../../queries/queries'
import { ProductCardList } from '../../components/ProductCardList'

const Gender: NextPage<{ data: GenderPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <ProductCardList entities={edgesToList(data.products)} />
    </div>
  )
}

export default Gender

export const getStaticProps: GetStaticProps = async (context) => {
  const { data, error } = await fetchData<
    GenderPageQuery,
    GenderPageQueryVariables
  >(queries.GenderPageQuery, { slug: context.params?.slug as string })
  return { props: data ? { data } : { error }, revalidate: 10 }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
