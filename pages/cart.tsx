import React from 'react'
import { OrderItemCard } from '../components/OrderCardItem'
import { useCart } from '../hooks/useCart'

export default function Cart() {
  const { cart, loading } = useCart()

  if (!cart && loading) {
    return <div className="container mt-4">Loading...</div>
  }

  return (
    <div className="container mt-4">
      <h1 className="text-2xl">Giỏ hàng</h1>
      <div>
        {cart?.items.map((x) => (
          <OrderItemCard key={x.id} entity={x} />
        ))}
      </div>
    </div>
  )
}
