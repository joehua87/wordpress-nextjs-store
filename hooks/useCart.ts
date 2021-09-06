import { useCallback, useEffect, useState } from 'react'
import { CartData } from '../types'
import create, { State } from 'zustand'

export interface CartState extends State {
  cart?: CartData
  loading: boolean
  fetch: () => Promise<void>
  addItem: (id: number, quantity: number) => Promise<void>
  updateItem: (key: string, quantity: number) => Promise<void>
  removeItem: (key: string) => Promise<void>
}

export const useCart = create<CartState>((set) => ({
  loading: false,
  async fetch() {
    set({ loading: true })
    const response = await fetch('/api/cart')
    const json = await response.json()
    set({ loading: false, cart: json })
  },
  async addItem(id: number, quantity: number) {
    set({ loading: true })
    const response = await fetch(`/api/cart/add-item`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id, quantity }),
    })
    const json = await response.json()
    set({ loading: false, cart: json })
  },
  async updateItem(key: string, quantity: number) {
    set({ loading: true })
    const response = await fetch(`/api/cart/update-item`, {
      method: 'put',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ key, quantity }),
    })
    const json = await response.json()
    set({ loading: false, cart: json })
  },
  async removeItem(key: string) {
    set({ loading: true })
    const response = await fetch(`/api/cart/remove-item`, {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ key }),
    })
    const json = await response.json()
    set({ loading: false, cart: json })
  },
}))
