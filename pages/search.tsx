import Head from 'next/head'
import type { GetServerSideProps, NextPage } from 'next'
import { ProductCardList } from '../components/ProductCardList'
import {
  ProductTaxonomyEnum,
  RelationEnum,
  SearchPageQuery,
  SearchPageQueryVariables,
  AppQuery,
  AppQueryVariables,
} from '../generated/graphql'
import { edgesToList, fetchData, notEmpty } from '../utils'
import { queries } from '../queries/queries'
import { getAggregate } from '../services'
import { ProductFilter, ProductAggregate } from '../types'
import { Drilldown } from '../components/Drilldown'

const Search: NextPage<{
  data: SearchPageQuery
  aggregate: ProductAggregate
  app: AppQuery
  filter: ProductFilter
}> = ({ app, data, aggregate, filter }) => {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>Search</title>
        <meta name="description" content="Product list" />
      </Head>
      <div className="flex items-start">
        <div className="w-40 flex-none top-0 sticky mr-4">
          <Drilldown app={app} aggregate={aggregate} filter={filter} />
        </div>
        <div className="flex-auto">
          <div>{data.products?.pageInfo?.total} products</div>
          <ProductCardList entities={edgesToList(data.products)} />
        </div>
      </div>
    </div>
  )
}

export default Search

function urlQueryItemToIntArray(key?: string | string[]) {
  if (Array.isArray(key)) {
    return key.map((x) => parseInt(x, 10))
  }
  if (typeof key === 'string') {
    return key.split(/,/g).map((x) => parseInt(x, 10))
  }
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const category = urlQueryItemToIntArray(query.category)
  const gender = urlQueryItemToIntArray(query.gender)
  const size = urlQueryItemToIntArray(query.size)
  const color = urlQueryItemToIntArray(query.color)

  const filter: ProductFilter = {
    attributes: [],
  }

  if (category) {
    filter.category = category
  }
  if (gender) {
    filter.gender = gender
  }
  if (size) {
    filter.attributes?.push({
      attribute: 'pa_size',
      operator: 'in',
      term_id: size,
    })
  }
  if (color) {
    filter.attributes?.push({
      attribute: 'pa_color',
      operator: 'in',
      term_id: color,
    })
  }

  const aggregate = await getAggregate(filter)

  const { data, error } = await fetchData<
    SearchPageQuery,
    SearchPageQueryVariables
  >(queries.SearchPageQuery, {
    where: {
      taxonomyFilter: {
        relation: RelationEnum.And,
        filters: [
          category && {
            taxonomy: ProductTaxonomyEnum.Productcategory,
            ids: category,
          },
          gender && {
            taxonomy: ProductTaxonomyEnum.Gender,
            ids: gender,
          },
          size && {
            taxonomy: ProductTaxonomyEnum.Pasize,
            ids: size,
          },
          color && {
            taxonomy: ProductTaxonomyEnum.Pacolor,
            ids: color,
          },
        ].filter(notEmpty),
      },
    },
  })
  const app = await fetchData<AppQuery, AppQueryVariables>(queries.AppQuery)
  return {
    props: data ? { data, app: app.data, filter, aggregate } : { error },
  }
}
