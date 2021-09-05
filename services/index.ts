import qs from 'qs'
import { storeEndpoint } from '../config'
import { ProductFilter } from '../types'

export async function getAggregate(filter: ProductFilter) {
  const query = qs.stringify({
    ...filter,
    category: filter.category?.join(',') || undefined,
    gender: filter.gender?.join(',') || undefined,
    calculate_attribute_counts: [
      {
        taxonomy: 'pa_color',
        query_type: 'or',
      },
      {
        taxonomy: 'pa_size',
        query_type: 'or',
      },
      {
        taxonomy: 'product_cat',
        query_type: 'or',
      },
      {
        taxonomy: 'gender',
        query_type: 'or',
      },
    ],
    calculate_price_range: true,
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
