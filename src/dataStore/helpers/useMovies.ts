import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import APIUtils from '../../Utils/APIUtils';
import {
  setCurrentPage,
  setIsFetching,
  setLastError,
  setMovies,
  setTotalMovies,
  setTotalPages
} from '../slices/movieSlice';
import {Movie} from '../../types/MovieTypes';
import {RootState} from '../index';

const MOVIES_ENDPOINT = import.meta.env.VITE_MOVIE_DB_API_POPULAR_MOVIES;

export const useMovies = () => {

  const dispatch = useDispatch();
  const moviesStore = useSelector((state: RootState) => state.movies);

  const getData = async () => {
    dispatch(setIsFetching(true));

    const {meta, data, error} = await APIUtils.getData(MOVIES_ENDPOINT);
    if (meta) {
      dispatch(setCurrentPage(meta.page));
      dispatch(setTotalMovies(meta.totalResults));
      dispatch(setTotalPages(meta.totalPages));
    }
    dispatch(setLastError(error ? error : ''));
    dispatch(setIsFetching(false));
    dispatch(setMovies(data as Movie[]));
  }

  useEffect(() => {
    if (!moviesStore.movies.length) getData().then();
  }, []);
}
