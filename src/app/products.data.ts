export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: 'Monstera Deliciosa', 
    price: 45.00, 
    image: 'https://picsum.photos/id/106/500/500',
    description: 'A beautiful tropical plant famous for its natural leaf holes.'
  },
  { 
    id: 2, 
    name: 'Fiddle Leaf Fig', 
    price: 60.00, 
    image: 'https://picsum.photos/id/107/500/500',
    description: 'A popular indoor tree with massive, violin-shaped leaves.'
  },
  { 
    id: 3, 
    name: 'Snake Plant', 
    price: 25.00, 
    image: 'https://picsum.photos/id/108/500/500',
    description: 'Nearly indestructible and great for purifying indoor air.'
  },
  { 
    id: 4, 
    name: 'Peace Lily', 
    price: 30.00, 
    image: 'https://picsum.photos/id/109/500/500',
    description: 'Elegant white flowers and lush dark green foliage.'
  },
  {
    id: 5,
    name: 'Golden Pothos',
    price: 18.00,
    image: 'https://picsum.photos/id/110/500/500',
    description: 'A fast-growing trailing vine with beautiful heart-shaped, variegated leaves. Looks stunning in a hanging basket.'
  },
  {
    id: 6,
    name: 'Rubber Tree Plant',
    price: 40.00,
    image: 'https://picsum.photos/id/111/500/500',
    description: 'Features thick, glossy, burgundy-green leaves. A sturdy and striking statement piece for any bright room.'
  },
  {
    id: 7,
    name: 'Aloe Vera',
    price: 22.00,
    image: 'https://picsum.photos/id/112/500/500',
    description: 'A handy succulent that loves the sun. Not only is it cute, but the gel inside its leaves is great for your skin.'
  },
  {
    id: 8,
    name: 'Spider Plant',
    price: 20.00,
    image: 'https://picsum.photos/id/113/500/500',
    description: 'A fun, pet-friendly plant that produces tiny "spiderettes" (baby plants) that dangle from the mother plant.'
  },
  {
    id: 9,
    name: 'ZZ Plant',
    price: 35.00,
    image: 'https://picsum.photos/id/114/500/500',
    description: 'The ultimate low-maintenance plant. It tolerates neglect, low light, and only needs watering once a month.'
  },
  {
    id: 10,
    name: 'Bird of Paradise',
    price: 75.00,
    image: 'https://picsum.photos/id/115/500/500',
    description: 'A magnificent, large-leafed tropical plant that brings a dramatic, architectural element to your home decor.'
  },
  {
    id: 11,
    name: 'Calathea Medallion',
    price: 32.00,
    image: 'https://picsum.photos/id/116/500/500',
    description: 'Famous for its stunning, patterned foliage that folds up at night like hands in prayer. Thrives in humidity.'
  }
];