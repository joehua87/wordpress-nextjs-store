import {
  ProductPageQuery,
  ProductVariationFragment,
} from '../generated/graphql'
import { notEmpty } from '../utils'
import { equals, groupBy, uniqBy } from 'ramda'
import { ProductPrice } from '../components/ProductPrice'
import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { IconShoppingCart } from '@tabler/icons'
import { taxonomiesMap } from '../config'

function extractOptionTypes(product?: ProductPageQuery['product'] | null) {
  if (product?.__typename !== 'VariableProduct') {
    return null
  }
  const variations = product.variations?.nodes?.filter(Boolean) || []
  let allAttributes = variations
    .flatMap((variation) => {
      return variation?.attributes?.nodes
        ?.filter(notEmpty)
        .map(({ attributeId, name, value }) => {
          return { name, attributeId, value }
        })
    }, {})
    .filter(notEmpty) as {
    name: string
    attributeId: number
    value: string
  }[]
  allAttributes = uniqBy((x) => `${x.name}:${x.value}`, allAttributes)
  const option_types = groupBy((x) => x.name, allAttributes)
  return {
    variations,
    option_types,
  }
}

export function VariableProductOrderForm({
  product,
}: {
  product: ProductPageQuery['product'] | null
}) {
  const [optionValues, setOptionValues] = useState<Record<string, string>>({})
  const [variation, setVariation] = useState<ProductVariationFragment | null>()
  const tmp = useMemo(() => extractOptionTypes(product), [product])
  if (!tmp) {
    return null
  }
  const { option_types, variations } = tmp

  return (
    <div>
      {Object.keys(option_types).map((key) => {
        return (
          <div key={key}>
            <div className="font-bold">{taxonomiesMap[key].name}</div>
            <div className="flex">
              {option_types[key].map((item) => {
                const isActive = optionValues[item.name] === item.value
                return (
                  <div
                    className={clsx(
                      'mr-1 mb-1 border px-2 py-0.5 cursor-pointer',
                      isActive && 'bg-rose-100 border-current text-rose-700',
                    )}
                    key={item.attributeId}
                    onClick={() => {
                      const nextOptionValues = {
                        ...optionValues,
                        [item.name]: item.value,
                      }
                      setOptionValues(nextOptionValues)
                      const v = variations.find((x) => {
                        const tmp = x?.attributes?.nodes?.reduce(
                          (acc: Record<string, string>, item) => {
                            if (!item?.name || !item.value) {
                              return acc
                            }
                            return {
                              ...acc,
                              [item.name]: item.value,
                            }
                          },
                          {},
                        )
                        return equals(tmp, nextOptionValues)
                      })
                      setVariation(v)
                    }}
                  >
                    {item.value}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      {variation ? (
        <div>
          <ProductPrice entity={variation} />
          <button
            disabled={!!variation}
            className="inline-flex items-center bg-rose-700 hover:bg-rose-800 shadow-sm hover:shadow-lg rounded text-white px-4 py-2"
          >
            <IconShoppingCart />
            <span className="ml-2">Thêm vào giỏ</span>
          </button>
        </div>
      ) : (
        <div>Vui lòng chọn tùy chọn</div>
      )}
    </div>
  )
}
