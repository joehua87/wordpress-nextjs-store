import { pickBy, sort } from 'ramda'
import { ProductAggregateItem } from '../types'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { IconX } from '@tabler/icons'

export function DefaultDrilldown({
  code,
  item,
  currentItems,
}: {
  code: string
  item: ProductAggregateItem
  currentItems: number[]
}) {
  const router = useRouter()
  const items = sort(
    (a, b) => a.term.name?.localeCompare(b.term.name || '') || 0,
    item.attribute_counts,
  )
  return (
    <div className="text-xs px-2 py-0.5 max-h-40 overflow-y-scroll">
      {items.map((x) => {
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
                      nextItems.length > 0 ? nextItems.join(',') : undefined,
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
  )
}
