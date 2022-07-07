export interface Movie {
  adult: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  liked: boolean;
}

export interface MovieSliceState {
  isFetching: boolean;
  lastError?: string;
  movies: Movie[];
  currentPage?: number;
  totalMovies?: number;
  totalPages?: number;
}
