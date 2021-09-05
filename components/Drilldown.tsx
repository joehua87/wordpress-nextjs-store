import { groupBy, pickBy, sort } from 'ramda'
import { AppQuery, TaxonomyEnum } from '../generated/graphql'
import { notEmpty } from '../utils'
import { ProductFilter, ProductAggregate } from '../types'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { IconX } from '@tabler/icons'

const taxonomiesMap: Record<
  string,
  { code: 'category' | 'gender' | 'size' | 'color'; name: string }
> = {
  ProductCategory: { code: 'category', name: 'Danh mục' },
  Gender: { code: 'gender', name: 'Giới tính' },
  PaSize: { code: 'size', name: 'Kích thước' },
  PaColor: { code: 'color', name: 'Màu' },
}

export function Drilldown({
  filter,
  aggregate,
  app,
}: {
  filter: ProductFilter
  aggregate: ProductAggregate
  app: AppQuery
}) {
  const router = useRouter()
  const tmp = app.terms?.nodes?.filter(notEmpty) || []
  const termsMap = tmp.reduce((acc: Record<string, typeof tmp[0]>, item) => {
    if (!item.termTaxonomyId) {
      return acc
    }
    return {
      ...acc,
      [item.termTaxonomyId?.toString()]: item,
    }
  }, {})

  const items = groupBy(
    (x) => x.term.__typename as string,
    aggregate.attribute_counts.map((x) => {
      return { ...x, term: termsMap[x.term] }
    }),
  )

  return (
    <div>
      {Object.keys(items).map((k) => {
        const terms = sort(
          (a, b) => a.term.name?.localeCompare(b.term.name || '') || 0,
          items[k],
        )
        const { code, name } = taxonomiesMap[k]
        const currentItems = filter[code] || []

        return (
          <div key={k} className="mb-4">
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
            <div className="text-xs px-2 py-0.5 max-h-40 overflow-y-scroll">
              {terms.map((x) => {
                const termId = x.term.termTaxonomyId as number
                const isActive = currentItems.includes(termId)

                return (
                  <div key={x.term.id} className="flex">
                    <div
                      className={clsx(
                        'cursor-pointer flex items-center',
                        isActive && 'font-bold',
                      )}
                      onClick={() => {
                        const nextItems = currentItems?.includes(termId)
                          ? currentItems.filter((x) => x !== termId)
                          : [...currentItems, termId]

                        router.push({
                          pathname: router.pathname,
                          query: pickBy((x) => !!x, {
                            ...router.query,
                            [code]:
                              nextItems.length > 0
                                ? nextItems.join(',')
                                : undefined,
                          }),
                        })
                      }}
                    >
                      <span>
                        {x.term.name} ({x.count})
                      </span>
                      {isActive && (
                        <span>
                          <IconX className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
