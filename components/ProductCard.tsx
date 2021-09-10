import { IconHeart, IconStar } from '@tabler/icons'
import Link from 'next/link'
import React from 'react'
import { ProductCardFragment } from '../generated/graphql'
import { notEmpty } from '../utils'
import DewImage from './DewImage'
import { ProductPrice } from './ProductPrice'

export function ProductCard({ entity }: { entity: ProductCardFragment }) {
  const href = entity.link && new URL(entity.link).pathname
  return (
    <div>
      <Link href={href as string}>
        <a className="product-card-hover-effect">
          <div className="relative aspect-w-1 aspect-h-1 bg-gray-50">
            <DewImage
              loading="lazy"
              src={entity.image?.mediumUrl}
              layout="fill"
              alt={entity.name || undefined}
              className="object-center object-contain"
            />
          </div>
          <h5 className="my-2 text-sky-700 font-semibold text-sm">
            {entity?.productCategories?.nodes?.filter(notEmpty).map((x) => (
              <span key={x.id}>{x.name}</span>
            ))}
          </h5>
          <h3 className="mb-3 text-gray-900 leading-snug w-3/4">
            {entity.name}
          </h3>
          <ProductPrice className="" entity={entity} />
        </a>
      </Link>
      <div className="my-2">
        <button className="border-2 border-gray-200 px-2.5 py-1 rounded text-sm text-sky-700 font-semibold hover:border-gray-600 hover:text-sky-900 transition">
          Quick Shop
        </button>
      </div>
    </div>
  )
}
