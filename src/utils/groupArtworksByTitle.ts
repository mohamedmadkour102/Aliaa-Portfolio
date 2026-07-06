import type { Artwork } from '../types'

function getGroupKey(artwork: Artwork): string {
  if (artwork.title.startsWith('O Noble Listeners')) return 'O Noble Listeners'
  if (artwork.title === 'Work of the Hand' || artwork.title === 'What Hands Do') {
    return 'Work of the Hand'
  }
  return artwork.title
}

function sortWithinGroup(groupKey: string, items: Artwork[]): Artwork[] {
  if (groupKey === 'O Noble Listeners') {
    return [...items].sort((a, b) => {
      const numA = Number.parseInt(a.title.match(/\d+$/)?.[0] ?? '0', 10)
      const numB = Number.parseInt(b.title.match(/\d+$/)?.[0] ?? '0', 10)
      return numA - numB
    })
  }
  return items
}

export function groupArtworksForGallery(items: Artwork[]): Artwork[][] {
  const groups = new Map<string, Artwork[]>()
  const groupOrder: string[] = []

  for (const artwork of items) {
    const key = getGroupKey(artwork)
    if (!groups.has(key)) {
      groups.set(key, [])
      groupOrder.push(key)
    }
    groups.get(key)!.push(artwork)
  }

  return groupOrder.map((key) => sortWithinGroup(key, groups.get(key)!))
}
