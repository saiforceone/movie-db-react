import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie, MovieSliceState} from '../../types/MovieTypes';

const INITIAL_STATE: MovieSliceState = {
  currentPage: 0,
  isFetching: false,
  lastError: '',
  movies: [],
  totalMovies: 0,
  totalPages: 0
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setLastError: (state, action: PayloadAction<string>) => {
      state.lastError = action.payload;
    },
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    setTotalMovies: (state, action: PayloadAction<number>) => {
      state.totalMovies = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      const targetIndex = state.movies.findIndex(movie => movie.id === action.payload);
      if (targetIndex > -1) {
        state.movies[targetIndex].liked = !state.movies[targetIndex].liked;
      }
    }
  }
});

export const {
  setCurrentPage,
  setIsFetching,
  setLastError,
  setMovies,
  setTotalMovies,
  setTotalPages,
  toggleLike,
} = movieSlice.actions;

export default movieSlice.reducer;
