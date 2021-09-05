import { groupBy, pickBy, sort } from 'ramda'
import { AppQuery, TaxonomyEnum } from '../generated/graphql'
import { notEmpty } from '../utils'
import { ProductFilter, ProductAggregate } from '../types'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const taxonomiesMap: Record<string, { code: string; name: string }> = {
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

        return (
          <div key={k} className="bg-gray-50 mb-4">
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
                const isActive =
                  (x.term.__typename === 'ProductCategory' &&
                    x.term.termTaxonomyId == filter.category) ||
                  (x.term.__typename === 'Gender' &&
                    x.term.termTaxonomyId == filter.gender) ||
                  (x.term.__typename === 'PaColor' &&
                    x.term.termTaxonomyId == filter.color) ||
                  (x.term.__typename === 'PaSize' &&
                    x.term.termTaxonomyId == filter.size)

                return (
                  <div key={x.term.id} className="flex">
                    <div
                      className={clsx(
                        'cursor-pointer',
                        isActive && 'font-bold',
                      )}
                      onClick={() => {
                        router.push({
                          pathname: router.pathname,
                          query: {
                            ...router.query,
                            [code]: x.term.termTaxonomyId,
                          },
                        })
                      }}
                    >
                      {x.term.name} ({x.count})
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
