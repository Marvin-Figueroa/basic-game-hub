import { OrderOption, Platform } from '../types';

export const platforms: Platform[] = [
  {
    id: 0,
    name: 'All Platforms',
    slug: ''
  },
  {
    id: 1,
    name: 'PC',
    slug: 'pc'
  },
  {
    id: 2,
    name: 'PlayStation',
    slug: 'playstation'
  },
  {
    id: 3,
    name: 'Xbox',
    slug: 'xbox'
  },
  {
    id: 4,
    name: 'iOS',
    slug: 'ios'
  },
  {
    id: 5,
    name: 'Apple Macintosh',
    slug: 'mac'
  },
  {
    id: 6,
    name: 'Linux',
    slug: 'linux'
  },
  {
    id: 7,
    name: 'Nintendo',
    slug: 'nintendo'
  },
  {
    id: 8,
    name: 'Android',
    slug: 'android'
  }
];

export const orderOptions: OrderOption[] = [
  {
    id: 1,
    title: 'Name',
    slug: 'name'
  },
  {
    id: 2,
    title: 'Date Released',
    slug: '-released'
  },
  {
    id: 3,
    title: 'Date Added',
    slug: '-added'
  },
  {
    id: 4,
    title: 'Popularity',
    slug: '-rating'
  },
  {
    id: 5,
    title: 'Average Rating',
    slug: '-metacritic'
  }
];
