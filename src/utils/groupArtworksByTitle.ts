import type { Artwork } from '../types'

export function groupArtworksByTitle(items: Artwork[]): Artwork[] {
  const groups = new Map<string, Artwork[]>()
  const titleOrder: string[] = []

  for (const artwork of items) {
    if (!groups.has(artwork.title)) {
      groups.set(artwork.title, [])
      titleOrder.push(artwork.title)
    }
    groups.get(artwork.title)!.push(artwork)
  }

  return titleOrder.flatMap((title) => groups.get(title)!)
}
