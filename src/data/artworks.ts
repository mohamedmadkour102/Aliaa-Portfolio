import type { Artwork, ArtworkCategory } from '../types'

export const categories: ArtworkCategory[] = [
  'Oil on Canvas',
  'Oil & Acrylic',
  'Egg Tempera',
  'Digital Mixed Media',
]

export const oNobleListenersDescription = `Ladies and gentlemen,
As the echoes of our voices crowded the room, the branch of listening withered away.
We shared the same space, yet in truth we were nothing more than neighboring bodies.
We spoke without listening.
We thought we were speaking to one another,
while all we heard was the echo of our own solitude.`

export const artworks: Artwork[] = [
  {
    id: 'work-01',
    title: 'Work of the Hand',
    medium: 'Oil on Canvas',
    year: 2026,
    category: 'Oil on Canvas',
    dimensions: '85 × 50 cm',
    image: '/artworks/1.jpeg',
  },
  {
    id: 'work-02',
    title: 'Unspoken Reach',
    medium: 'Oil on Canvas',
    year: 2025,
    category: 'Oil on Canvas',
    dimensions: '60 × 80 cm',
    image: '/artworks/2.jpeg',
    description:
      "She doesn't fear the bubble — she knows it has to burst.\nA gentle reach toward the unknown, wrapped in stillness and quiet faith.",
  },
  {
    id: 'work-03',
    title: 'Fungal Echoes',
    medium: 'Oil & Acrylic on Canvas',
    year: 2024,
    category: 'Oil & Acrylic',
    dimensions: '90 × 110 cm',
    image: '/artworks/3.jpeg',
    description:
      "Toxic ground couldn't stop her — it's where she learned to bloom.\nSome women don't survive despite the darkness. They grow because of it.",
  },
  {
    id: 'work-04',
    title: 'Untitled',
    medium: 'Oil on Canvas',
    year: 2024,
    category: 'Oil on Canvas',
    dimensions: '50 × 70 cm',
    image: '/artworks/4.jpeg',
    description:
      "She holds herself together — so the world won't see her fall apart.\nGreen and still, while everything around her burns.",
  },
  {
    id: 'work-05',
    title: 'What Was Left Unsaid',
    medium: 'Egg Tempera on Canvas',
    year: 2025,
    category: 'Egg Tempera',
    dimensions: '50 × 70 cm',
    image: '/artworks/5.jpeg',
    description:
      'A portrait painted in the spirit of the Fayum mummy tradition — where the face was never meant to be forgotten. She looks directly at you, steady and unguarded, carrying the weight of something never spoken.',
  },
  {
    id: 'work-06',
    title: 'O Noble Listeners 2',
    medium: 'Oil & Acrylic on Canvas',
    year: 2025,
    category: 'Oil & Acrylic',
    dimensions: '120 × 70 cm',
    image: '/artworks/6.jpeg',
    sold: true,
    description: oNobleListenersDescription,
  },
  {
    id: 'work-07',
    title: 'O Noble Listeners 3',
    medium: 'Oil on Canvas',
    year: 2025,
    category: 'Oil on Canvas',
    dimensions: '50 × 60 cm',
    image: '/artworks/7.jpeg',
    sold: true,
    description: oNobleListenersDescription,
  },
  {
    id: 'work-08',
    title: 'Roots of Memory',
    medium: 'Oil on Canvas',
    year: 2026,
    category: 'Oil on Canvas',
    dimensions: '80 × 60 cm',
    image: '/artworks/8.jpeg',
    description:
      'Before the first breath, there was the earth. Before the first word, there was the root.\nThe way we are born, the way we reach toward one another, the way we grieve and grow and begin again — it is all the same language the tree has always spoken.\nWe were never separate. We simply forgot.',
  },
  {
    id: 'work-09',
    title: 'Facing the Self',
    medium: 'Oil on Canvas',
    year: 2024,
    category: 'Oil on Canvas',
    dimensions: '50 × 60 cm',
    image: '/artworks/9.jpeg',
    description: 'Facing the Self',
  },
  {
    id: 'work-10',
    title: 'O Noble Listeners 4',
    medium: 'Oil on Canvas',
    year: 2025,
    category: 'Oil on Canvas',
    dimensions: '130 × 90 cm',
    image: '/artworks/10.jpeg',
    description: oNobleListenersDescription,
  },
  {
    id: 'work-11',
    title: 'Final Reflection',
    medium: 'Oil on Canvas',
    year: 2026,
    category: 'Oil on Canvas',
    dimensions: '90 × 110 cm',
    image: '/artworks/11.jpeg',
    description:
      "She holds the lens close, searching. Not for answers — for proof. That something pure still exists. That innocence hasn't completely left the room.\nAnd there it is. Small, white, unbothered — the only thing that doesn't know how to deceive or manipulate.\nMaybe that's what we're all looking for — not peace in the world, but one last thing in it we can still trust.",
  },
  {
    id: 'work-12',
    title: 'Cool Cool!',
    medium: 'Oil on Canvas',
    year: 2026,
    category: 'Oil on Canvas',
    dimensions: '50 × 70 cm',
    image: '/artworks/12.jpeg',
    description: "She lives in her dlulu like it's a home she decorated herself.",
  },
  {
    id: 'work-13',
    title: 'Touch of a Human',
    medium: 'Oil on Canvas',
    year: 2025,
    category: 'Oil on Canvas',
    dimensions: '90 × 80 cm',
    image: '/artworks/13.jpeg',
    description:
      '"There\'s a tree that grows in Brooklyn. Some people call it the Tree of Heaven. No matter where its seed falls, it makes a tree which struggles to reach the sky. It grows in boarded-up lots and out of neglected rubbish heaps. It is the only tree that grows out of cement. It grows lushly... survives without sun, water, and seemingly without earth. It would be considered beautiful except that there are too many of it" — Betty Smith',
  },
  {
    id: 'work-14',
    title: 'System Overload',
    medium: 'Digital Mixed Media',
    year: 2026,
    category: 'Digital Mixed Media',
    image: '/artworks/14.jpeg',
    description:
      "raw, unraveling, and still somehow the most honest thing in the world.\nWe call it madness. But maybe it's just a person who felt too much, too real, too human.",
  },
  {
    id: 'work-15',
    title: 'The Loop',
    medium: 'Oil on Canvas',
    year: 2024,
    category: 'Oil on Canvas',
    dimensions: '100 × 70 cm',
    image: '/artworks/theloop.jpeg',
    description:
      'Not darkness, not despair — just the quiet, colorful realization that none of it was ever meant to make sense.',
  },
  {
    id: 'work-16',
    title: 'O Noble Listeners 1',
    medium: 'Oil on Canvas',
    year: 2025,
    category: 'Oil on Canvas',
    dimensions: '90 × 80 cm',
    image: '/artworks/16.jpeg',
    exhibitedAt: 'Abuntu Art Gallery',
    description: oNobleListenersDescription,
  },
  {
    id: 'work-17',
    title: 'Safe Place',
    medium: 'Oil on Canvas',
    year: 2025,
    category: 'Oil on Canvas',
    dimensions: '35 × 50 cm',
    image: '/artworks/17.png',
    description:
      "A mother's hand over her daughter's eyes — not to blind her, but to buy her one more moment before the world becomes too heavy to carry alone.\n\nThis is love in its quietest form: not yet. not all of it. not today.",
  },
  {
    id: 'work-18',
    title: 'O Noble Listeners 5',
    medium: 'Oil on Canvas',
    year: 2025,
    category: 'Oil on Canvas',
    dimensions: '90 × 80 cm',
    image: '/artworks/18.jpeg',
    description: oNobleListenersDescription,
  },
  {
    id: 'work-19',
    title: 'Landscape I',
    medium: 'Oil on Canvas',
    year: 2025,
    category: 'Oil on Canvas',
    image: '/artworks/landscape1.jpeg',
  },
  {
    id: 'work-20',
    title: 'Landscape II',
    medium: 'Oil on Canvas',
    year: 2025,
    category: 'Oil on Canvas',
    image: '/artworks/landscape2.jpeg',
  },
]

export const artistStatement = `I am a painter and digital artist based in Egypt, working in oil on canvas and digital media. My work is rooted in the exploration of human emotion and connection — the ways we feel, the ways we reach toward one another, and our relationship with the world around us. I paint figures, hands, and landscapes not as literal subjects, but as emotional territory. Through color and concept, I try to make visible what is often left unspoken: tension, vulnerability, longing, quiet strength. I am drawn to the moments between people and within a single person — the internal states that shape how we exist in the world.`

export const education = {
  degree: 'Bachelor of Fine Arts (B.F.A.)',
  department: 'Painting Department – Faculty of Fine Arts, Helwan University',
}

export const contactInfo = {
  name: 'Aliaa Ellithey',
  phone: '01091262257',
  email: 'aliaafathy28@gmail.com',
  instagram: '@aliaellithey',
  instagramUrl: 'https://instagram.com/aliaellithey',
  location: 'Cairo, Egypt',
}
