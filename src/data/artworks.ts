import { ArtworkItem } from '../types';
import { images } from '../utils/imageImports';

export const artworks: ArtworkItem[] = [
  {
    id: '1',
    title: 'Aftertime',
    description: 'Time after with cigaret',
    imageUrl: images.aftertime,
    tags: ['numérique'],
    price: 24,
    priceA4: 40,
    priceA5: 65
  },
  {
    id: '2',
    title: 'After work',
    description: 'on Saint Patrick\'s day',
    imageUrl: images.afterwork,
    tags: ['Aquarelle', 'numérique'],
    price: 232,
    priceA4: 40,
    priceA5: 65
  },
  {
    id: '3',
    title: 'Amy',
    description: 'Amy Whinehouse',
    imageUrl: images.amy,
    tags: ['numérique'],
    price: 11,
    priceA4: 40,
    priceA5: 65
  },
  {
    id: '4',
    title: 'Autumn bath',
    description: 'Body and autumn lake',
    imageUrl: images.autumnbath,
    tags: ['photo', 'numérique'],
    price: 12,
    priceA4: 40,
    priceA5: 65
  },
  {
    id: '5',
    title: 'Autumn crown',
    description: 'Crown with autumn flowers',
    imageUrl: images.autumncrown,
    tags: ['Aquarelle', 'numérique'],
    price: 24,
    priceA4: 40,
    priceA5: 65
  }
];