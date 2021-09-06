import { groupBy, pickBy } from 'ramda'
import { AppQuery, TaxonomyEnum } from '../generated/graphql'
import { notEmpty } from '../utils'
import { ProductFilter, ProductAggregate } from '../types'
import { useRouter } from 'next/router'
import { DefaultDrilldown } from './DefaultDrilldown'
import { SizeDrilldown } from './SizeDrilldown'

const taxonomiesMap: Record<
  string,
  { code: 'category' | 'gender' | 'size' | 'color'; name: string }
> = {
  product_cat: { code: 'category', name: 'Danh mục' },
  gender: { code: 'gender', name: 'Giới tính' },
  pa_size: { code: 'size', name: 'Kích thước' },
  pa_color: { code: 'color', name: 'Màu' },
}

export function Drilldown({
  filter,
  aggregate,
}: {
  filter: ProductFilter
  aggregate: ProductAggregate[]
}) {
  const router = useRouter()

  return (
    <div>
      {aggregate.map(({ key, data }) => {
        const { code, name } = taxonomiesMap[key]
        const currentItems = filter[code] || []

        return (
          <div key={key} className="mb-4">
            <div className="bg-gray-200 px-2 py-0.5 flex justify-between">
              <div className="font-bold text-sm">{name}</div>
              {router.query[code] && (
                <button
                  className="text-gray-700 text-sm"
                  onClick={() => {
                    router.push({
                      pathname: router.pathname,
                      query: pickBy((x) => !!x, {
                        ...router.query,
                        [code]: undefined,
                      }),
                    })
                  }}
                >
                  Xóa
                </button>
              )}
            </div>
            <div className="text-xs py-0.5 max-h-40 overflow-y-scroll">
              {code === 'size' ? (
                <SizeDrilldown
                  item={data}
                  code={code}
                  currentItems={currentItems}
                />
              ) : (
                <DefaultDrilldown
                  item={data}
                  code={code}
                  currentItems={currentItems}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
