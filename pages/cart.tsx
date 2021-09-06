import React, { useEffect } from 'react'

export default function Cart() {
  useEffect(() => {
    fetch('/api/cart').then(async (response) => {
      console.log(await response.json())
    })
  })
  return (
    <div className="container mt-4">
      <h1 className="text-2xl">Giỏ hàng</h1>
    </div>
  )
}
