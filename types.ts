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
export interface CartData {
  coupons: Coupon[]
  shipping_rates: ShippingRate[]
  shipping_address: ShippingAddress
  billing_address: BillingAddress
  items: OrderItem[]
  items_count: number
  items_weight: number
  needs_payment: boolean
  needs_shipping: boolean
  has_calculated_shipping: boolean
  fees: any[]
  totals: Totals3
  errors: any[]
  payment_requirements: string[]
  generated_timestamp: number
  extensions: Extensions2
}

export interface Coupon {
  code: string
  discount_type: string
  totals: Totals
}

export interface Totals {
  total_discount: string
  total_discount_tax: string
  currency_code: string
  currency_symbol: string
  currency_minor_unit: number
  currency_decimal_separator: string
  currency_thousand_separator: string
  currency_prefix: string
  currency_suffix: string
}

export interface ShippingRate {
  package_id: number
  name: string
  destination: Destination
  items: Item[]
  shipping_rates: ShippingRate2[]
}

export interface Destination {
  address_1: string
  address_2: string
  city: string
  state: string
  postcode: string
  country: string
}

export interface Item {
  key: string
  name: string
  quantity: number
}

export interface ShippingRate2 {
  rate_id: string
  name: string
  description: string
  delivery_time: string
  price: string
  taxes: string
  instance_id: number
  method_id: string
  meta_data: MetaDaum[]
  selected: boolean
  currency_code: string
  currency_symbol: string
  currency_minor_unit: number
  currency_decimal_separator: string
  currency_thousand_separator: string
  currency_prefix: string
  currency_suffix: string
}

export interface MetaDaum {
  key: string
  value: string
}

export interface ShippingAddress {
  first_name: string
  last_name: string
  company: string
  address_1: string
  address_2: string
  city: string
  state: string
  postcode: string
  country: string
}

export interface BillingAddress {
  first_name: string
  last_name: string
  company: string
  address_1: string
  address_2: string
  city: string
  state: string
  postcode: string
  country: string
  email: string
  phone: string
}

export interface OrderItem {
  key: string
  id: number
  quantity: number
  quantity_limit: number
  name: string
  short_description: string
  description: string
  sku: string
  low_stock_remaining: any
  backorders_allowed: boolean
  show_backorder_badge: boolean
  sold_individually: boolean
  permalink: string
  images: Image[]
  variation: Variation[]
  item_data: any[]
  prices: Prices
  totals: Totals2
  catalog_visibility: string
  extensions: Extensions
}

export interface Image {
  id: number
  src: string
  thumbnail: string
  srcset: string
  sizes: string
  name: string
  alt: string
}

export interface Variation {
  attribute: string
  value: string
}

export interface Prices {
  price: string
  regular_price: string
  sale_price: string
  price_range: any
  currency_code: string
  currency_symbol: string
  currency_minor_unit: number
  currency_decimal_separator: string
  currency_thousand_separator: string
  currency_prefix: string
  currency_suffix: string
  raw_prices: RawPrices
}

export interface RawPrices {
  precision: number
  price: string
  regular_price: string
  sale_price: string
}

export interface Totals2 {
  line_subtotal: string
  line_subtotal_tax: string
  line_total: string
  line_total_tax: string
  currency_code: string
  currency_symbol: string
  currency_minor_unit: number
  currency_decimal_separator: string
  currency_thousand_separator: string
  currency_prefix: string
  currency_suffix: string
}

export interface Extensions {}

export interface Totals3 {
  total_items: string
  total_items_tax: string
  total_fees: string
  total_fees_tax: string
  total_discount: string
  total_discount_tax: string
  total_shipping: string
  total_shipping_tax: string
  total_price: string
  total_tax: string
  tax_lines: any[]
  currency_code: string
  currency_symbol: string
  currency_minor_unit: number
  currency_decimal_separator: string
  currency_thousand_separator: string
  currency_prefix: string
  currency_suffix: string
}

export interface Extensions2 {}
