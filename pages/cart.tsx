import React from 'react'
import useSWR from 'swr'
import DewImage from '../components/DewImage'
import { CartData } from '../types'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Cart() {
  const { data, isValidating, error } = useSWR<CartData>('/api/cart', fetcher)

  if (isValidating) {
    return <div className="container mt-4">Loading...</div>
  }

  return (
    <div className="container mt-4">
      <h1 className="text-2xl">Giỏ hàng</h1>
      <div>
        {data?.items.map((x) => (
          <div key={x.id}>
            <div className="w-32 h-32 relative">
              <DewImage src={x.images[0].src} layout="fill" />
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: x.name }} />
            <h3>{x.description}</h3>
            <h3>{x.short_description}</h3>
            <h3>{x.quantity}</h3>
            <div>{x.prices.regular_price}</div>
            <div>{x.totals.line_total}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
