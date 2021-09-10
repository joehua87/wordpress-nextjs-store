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
import { ProductAggregate, ProductFilter } from '../types'
import { Drilldown } from '../components/Drilldown'
import { pickBy } from 'ramda'
import { IconFilter, IconSearch, IconX } from '@tabler/icons'
import { useState } from 'react'

const Search: NextPage<{
  data: SearchPageQuery
  aggregate: ProductAggregate[]
  app: AppQuery
  filter: ProductFilter
}> = ({ data, aggregate, filter }) => {
  const [isShowFilter, setIsShowFilter] = useState(false)

  return (
    <div className="container mt-12">
      <Head>
        <title>Search</title>
        <meta name="description" content="Product list" />
      </Head>
      <div className="bg-rose-700 fixed top-0 w-full h-12 z-10 left-0 px-2 flex items-center lg:hidden">
        <div className="flex items-center border bg-white px-2 py-0.5 flex-auto rounded">
          <input className="w-full" placeholder="Tìm kiếm…" />
          <IconSearch className="ml-2" />
        </div>
        <button
          className="ml-2 text-white"
          aria-label="Show filter"
          onClick={() => {
            setIsShowFilter(true)
          }}
        >
          <IconFilter />
        </button>
      </div>

      <div className="font-bold text-3xl mb-2">Search page</div>
      <div className="mb-4">
        Tìm thấy {data.products?.pageInfo?.total} sản phẩm
      </div>
      <div className="flex items-start">
        <div className="w-40 flex-none top-0 sticky mr-4 hidden lg:block">
          <Drilldown aggregate={aggregate} filter={filter} />
        </div>
        <div className="flex-auto">
          <div className="p-2 bg-rose-100 mb-2 rounded flex items-center justify-between">
            {data.products?.pageInfo?.total} products
            <div>TODO: Pagination</div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Bạn đang chọn</h3>
          <div className="p-2 rounded bg-yellow-100 mb-2">
            TODO: Removable filter goes here
          </div>
          <ProductCardList entities={edgesToList(data.products)} />
        </div>
      </div>
      {isShowFilter && (
        <div className="fixed top-12 bottom-0 left-0 right-0 overflow-y-scroll bg-white">
          <div className="p-2 flex items-center justify-between">
            <div>{data.products?.pageInfo?.total} products</div>
            <button
              onClick={() => {
                setIsShowFilter(false)
              }}
            >
              <IconX />
            </button>
          </div>
          <Drilldown aggregate={aggregate} filter={filter} />
        </div>
      )}
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

  const filter: ProductFilter = pickBy((x) => !!x, {
    category,
    gender,
    size,
    color,
  })

  const { data: app } = await fetchData<AppQuery, AppQueryVariables>(
    queries.AppQuery,
  )
  const aggregate = await getAggregate(filter, app)

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
  return {
    props: data
      ? {
          data,
          app,
          filter: pickBy((x) => !!x, { category, gender, size, color }),
          aggregate,
        }
      : { error },
  }
}
