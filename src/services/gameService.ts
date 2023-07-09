import { PlatformRoot } from '../types';
import create from './httpService';

export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  metacritic: number;
  parent_platforms: PlatformRoot[];
  rating_top: number;
}

export default create('/games');
