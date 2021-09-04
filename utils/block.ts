import Cheerio from 'cheerio'
import { parse } from '@wordpress/block-serialization-default-parser'
import { notEmpty } from '../utils'
import stringHash from '@sindresorhus/string-hash'

function parseGallery(html: string) {
  const $ = Cheerio.load(html)
  const id = $('body > *').attr('id')

  const items = $('li > figure')
    .map((_, el) => {
      const href = $(el).find('a').attr('href')
      const description = $(el).find('i').text()
      const title = $(el)
        .find('figcaption')
        .text()
        .replace(description, '')
        .trim()
      const alt = $(el).find('img').attr('alt')
      const id = $(el).find('img').attr('data-id')
      const src = $(el).find('img').attr('data-full-url')
      return {
        id: id || null,
        src: src || null,
        alt: alt || null,
        href: href || null,
        title: title || null,
        description: description || null,
      }
    })
    .get()
  return {
    id,
    items,
  }
}

const cache = new Map<number, any>()

export function parseBlocks(content?: string | null) {
  if (!content) {
    return []
  }
  const key = stringHash(content)
  if (cache.has(key)) {
    return cache.get(key)
  }

  const rawBlocks = parse(content)
    .map(({ blockName, innerContent: [html], attrs }) => {
      switch (blockName) {
        case 'core/gallery':
          return { blockName, attrs, data: parseGallery(html) }
        default:
          return null
      }
    })
    .filter(notEmpty)
    .reduce((acc, { blockName, data }) => {
      if (data.id) {
        return {
          ...acc,
          [data.id]: data,
        }
      }
      return acc
    }, {})
  cache.set(key, rawBlocks)
  return rawBlocks
}
