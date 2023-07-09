export interface PlatformRoot {
  platform: Platform;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface APIResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface RequestParams {
  page?: number;
  page_size?: number;
  search?: string;
  ordering?: string;
  parent_platforms?: (number | undefined)[];
  genres?: (number | undefined)[];
}

export type OrderOption = {
  id: number;
  title: string;
  slug:
    | 'name'
    | '-name'
    | 'released'
    | '-released'
    | 'added'
    | '-added'
    | 'rating'
    | '-rating'
    | 'metacritic'
    | '-metacritic';
};
