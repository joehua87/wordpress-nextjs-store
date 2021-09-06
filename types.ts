import { TermNode } from './generated/graphql'

export interface GalleryItem {
  id: string | null
  src: string | null
  alt: string | null
  caption: string | null
  description: string | null
  href: string | null
}

export interface Gallery {
  id: string
  items?: GalleryItem[]
}

export interface PriceRange {
  min_price: string
  max_price: string
  currency_code: string
  currency_symbol: string
  currency_minor_unit: number
  currency_decimal_separator: string
  currency_thousand_separator: string
  currency_prefix: string
  currency_suffix: string
}

export interface AttributeCount {
  term: TermNode
  count: number
}

export interface ProductAggregateItem {
  attribute_counts: AttributeCount[]
  price_range?: PriceRange
  rating_counts?: any
}

export interface ProductAggregate {
  key: string
  data: ProductAggregateItem
}
export interface ProductFilter {
  category?: number[]
  gender?: number[]
  size?: number[]
  color?: number[]
}

export interface WooProductFilter {
  category?: string
  gender?: string
  attributes?: {
    attribute: string
    operator: 'in' | 'and'
    term_id: number[]
  }[]
}
