export type ArtworkCategory =
  | 'Oil on Canvas'
  | 'Oil & Acrylic'
  | 'Egg Tempera'
  | 'Digital Mixed Media'

export interface Artwork {
  id: string
  title: string
  medium: string
  year: number
  category: ArtworkCategory
  image: string
  dimensions?: string
  sold?: boolean
  exhibitedAt?: string
  description?: string
}
