import { pickBy, sort } from 'ramda'
import { ProductAggregateItem } from '../types'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { IconX } from '@tabler/icons'

export function SizeDrilldown({
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
    <div
      // className="text-xs max-h-40 overflow-y-scroll"
      className=""
    >
      <div
        // className="grid grid-cols-3 gap-2"
        className=""
      >
        {items.map((x) => {
          const termId = x.term.termTaxonomyId as number
          const isActive = currentItems.includes(termId)

          return (
            <div
              key={x.term.id}
              className={clsx(
                // 'cursor-pointer border w-full aspect-w-4 aspect-h-3 relative font-bold text-gray-800 rounded hover:border-blue-400 hover:text-blue-800 hover:bg-blue-50',
                '',
                // isActive && 'border-blue-400 bg-blue-50 text-blue-800',
                isActive && '',
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
              <div className="flex items-center justify-center text-center">
                {x.term.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
