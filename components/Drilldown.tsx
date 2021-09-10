import { pickBy } from 'ramda'
import { ProductFilter, ProductAggregate } from '../types'
import { useRouter } from 'next/router'
import { DefaultDrilldown } from './DefaultDrilldown'
import { SizeDrilldown } from './SizeDrilldown'
import { taxonomiesMap } from '../config'
import { IconChevronDown } from '@tabler/icons'

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
            <div className="border-b border-gray-300 px-2 py-0.5 my-3">
              <div className="font-bold text-sm flex items-center flex justify-between w-full">
                {name} <IconChevronDown className="w-4 h-4 ml-1" />
              </div>
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
