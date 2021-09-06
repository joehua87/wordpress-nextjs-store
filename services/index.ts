import qs from 'qs'
import { storeEndpoint } from '../config'
import { AppQuery, TermNode } from '../generated/graphql'
import {
  PriceRange,
  ProductAggregate,
  ProductAggregateItem,
  ProductFilter,
  WooProductFilter,
} from '../types'
import { notEmpty } from '../utils'

const map: Record<string, string[]> = {
  pa_color: ['pa_size', 'product_cat', 'gender'],
  pa_size: ['pa_color', 'product_cat', 'gender'],
  product_cat: ['pa_color', 'pa_size', 'gender'],
  gender: ['pa_color', 'pa_size', 'product_cat'],
}

/**
 * Convert an UI filter object to Woocommerce REST filter
 */
function toWooFilter({
  category,
  gender,
  size,
  color,
}: ProductFilter): WooProductFilter {
  const filter: WooProductFilter = {
    attributes: [],
  }
  if (category) {
    filter.category = category?.join(',') || undefined
  }
  if (gender) {
    filter.gender = gender?.join(',') || undefined
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
  return filter
}

function getTermsMapFromApp(app?: AppQuery | null) {
  const tmp = app?.terms?.nodes?.filter(notEmpty) || []
  return tmp.reduce((acc: Record<string, TermNode>, item) => {
    if (!item.termTaxonomyId) {
      return acc
    }
    return {
      ...acc,
      [item.termTaxonomyId.toString()]: item as unknown as TermNode,
    }
  }, {})
}

export async function getAggregate(
  filter: ProductFilter,
  app?: AppQuery | null,
): Promise<ProductAggregate[]> {
  const termsMap = getTermsMapFromApp(app)
  const promises = Object.keys(map).map(async (key) => {
    const data = await getOneAggregate(filter, key)
    return {
      key,
      data: {
        ...data,
        attribute_counts: data.attribute_counts.map((x) => {
          return { ...x, term: termsMap[x.term] }
        }),
      },
    }
  })
  return Promise.all(promises)
}

export async function getOneAggregate(
  filter: ProductFilter,
  key: string,
): Promise<{
  attribute_counts: {
    term: number
    count: number
  }[]
  price_range?: PriceRange
  rating_counts?: any
}> {
  const tmp = { ...filter, [key]: undefined }
  const wooFilter = toWooFilter(tmp)
  const query = qs.stringify({
    ...wooFilter,
    calculate_attribute_counts: [
      {
        taxonomy: key,
        query_type: 'or',
      },
    ],
    // TODO: Add price range for all taxonomy filter
    // calculate_price_range: true,
  })
  const response = await fetch(
    `${storeEndpoint}/products/collection-data?${query}`,
  )
  return response.json()
}

export async function getProducts(filter: ProductFilter) {
  const query = qs.stringify({
    ...filter,
    category: filter.category?.join(','),
    gender: filter.gender?.join(','),
    category_operator: 'in',
    gender_operator: 'in',
  })
  const response = await fetch(`${storeEndpoint}/products?${query}`)
  return response.json()
}
