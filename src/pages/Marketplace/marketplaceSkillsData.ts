export type MarketplaceSkillCard = {
  id: string
  tag: string
  rating: number
  title: string
  description: string
  descriptionExtra?: string
  sold: number
  cost: string
  author: string
  authorInitials: string
  featured?: boolean
}

export const MARKETPLACE_FILTER_TAGS = [
  'All',
  'Claw-Pick',
  'Claw-Inspect',
  'Engineering',
  'Executive',
  'General',
  'HR',
] as const

export const MARKETPLACE_SKILL_CARDS: MarketplaceSkillCard[] = [
  {
    id: '1',
    tag: 'Claw-Fold',
    rating: 700,
    title: 'Precision Cloth Fold',
    description:
      'Automatically folds clothes with consistent alignment and minimal wrinkles.',
    sold: 25,
    cost: '$15.26',
    author: 'Author 1',
    authorInitials: 'A1',
  },
  {
    id: '2',
    tag: 'Claw-Sort',
    rating: 700,
    title: 'Smart Item Sorter',
    description:
      'Classifies and sorts mixed objects into categories using visual recognition. Classifies and sorts mixed objects into categories using visual recognition. Classifies and sorts mixed objects into categories using visual recognition.',
    sold: 25,
    cost: '$15.26',
    author: 'Kenji',
    authorInitials: 'K',
  },
  {
    id: '3',
    tag: 'Claw-Pick',
    rating: 700,
    title: 'Complex Logic Synthesis',
    description:
      'Detects, selects, and picks target objects based on context and visual cues.',
    sold: 25,
    cost: '$15.26',
    author: 'Author 1',
    authorInitials: 'A1',
    featured: true,
  },
  {
    id: '4',
    tag: 'Claw-Deliver',
    rating: 700,
    title: 'Indoor Delivery Bot Indoor Delivery Bot',
    description: 'Navigates indoor spaces to deliver items safely and efficiently.',
    sold: 25,
    cost: '$15.26',
    author: 'Marco',
    authorInitials: 'M',
  },
  {
    id: '5',
    tag: 'Claw-Clean',
    rating: 700,
    title: 'Object Recognition v2',
    description: 'High-fidelity visual identification for complex object sorting.',
    sold: 25,
    cost: '$15.26',
    author: 'Author 1',
    authorInitials: 'A1',
  },
  {
    id: '6',
    tag: 'Claw-Inspect',
    rating: 700,
    title: 'Collaborative Sorting',
    description: 'Scans objects for defects or anomalies using advanced visual analysis.',
    sold: 25,
    cost: '$15.26',
    author: 'Author 1',
    authorInitials: 'A1',
  },
]
