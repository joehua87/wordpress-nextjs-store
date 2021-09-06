import React from 'react'
import DewImage from '../components/DewImage'
import { useCart } from '../hooks/useCart'
import { OrderItem } from '../types'

export function OrderItemCard({ entity }: { entity: OrderItem }) {
  const { updateItem, removeItem } = useCart()
  return (
    <div key={entity.id} className="flex border-b pb-2 mb-4">
      <div className="w-32 h-32 relative">
        <DewImage src={entity.images[0].src} layout="fill" />
      </div>
      <div className="ml-2">
        <h3 dangerouslySetInnerHTML={{ __html: entity.name }} />
        <h3>{entity.description}</h3>
        <h3>{entity.short_description}</h3>
        <input
          className="border"
          value={entity.quantity}
          type="number"
          required
          onChange={(e) => {
            updateItem(entity.key, e.target.valueAsNumber)
          }}
        />
        <div>{entity.prices.regular_price}</div>
        <div>{entity.totals.line_subtotal}</div>
        <button onClick={() => removeItem(entity.key)}>Remove</button>
      </div>
    </div>
  )
}
