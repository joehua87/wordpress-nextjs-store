export interface TocItem {
  level: number
  id: string
  title: string
}

export function extractToc(content?: string | null) {
  if (!content) {
    return []
  }
  const regexp = /\<h(\d)>\<span id="(.*?)"\>(.*?)\<\/span\><\/h\d>/gs
  let matches: RegExpExecArray | null

  const items: TocItem[] = []
  while ((matches = regexp.exec(content))) {
    if (typeof matches.index === 'undefined') {
      continue
    }
    const [_, level, id, title] = matches
    items.push({ level: parseInt(level, 10), id, title })
  }
  return items
}

export function Toc({ content }: { content?: string | null }) {
  const items = extractToc(content)
  if (!items.length) {
    return <div>Nothing to display</div>
  }

  return (
    <div className="border p-2">
      <div className="font-bold">Mục lục</div>
      <ul>
        {items.map((x) => (
          <li key={x.id}>
            <a href={`#${x.id}`}>{x.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
