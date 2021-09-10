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
    <Link href={href as string}>
      <a className="">
        <div className="relative aspect-w-3 aspect-h-4 bg-gray-50">
          <DewImage
            loading="lazy"
            src={entity.image?.mediumUrl}
            layout="fill"
            alt={entity.name || undefined}
            className="object-center object-contain"
          />
        </div>
        <div className="my-2 text-blue-800 font-semibold text-sm">
          {entity?.productCategories?.nodes?.filter(notEmpty).map((x) => (
            <span key={x.id}>{x.name}</span>
          ))}
        </div>
        <h3 className="mb-3 text-gray-900">{entity.name}</h3>

        <ProductPrice className="" entity={entity} />
      </a>
    </Link>
  )
}
