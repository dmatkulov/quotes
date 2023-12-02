import {LinkItem} from '../types';

export const LinkItems: LinkItem[] = [
  {category: 'Star Wars', id: 'star-wars'},
  {category: 'Famous people', id: 'famous-people'},
  {category: 'Saying', id: 'saying'},
  {category: 'Humour', id: 'humour'},
  {category: 'Motivational', id: 'motivational'},
];

export const formatTitle = (id: string): string => {
  switch (id) {
    case 'famous-people':
      return 'Famous People';
    case 'star-wars':
      return 'Star Wars';
    case 'humour':
      return 'Humour';
    case 'motivational':
      return 'Motivational';
    case 'saying':
      return 'Saying';
    default:
      return 'All';
  }
};