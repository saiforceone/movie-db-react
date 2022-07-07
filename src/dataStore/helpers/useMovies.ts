import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../index';
import {fetchMoviesAction} from '../actions/movieActions';

export const useMovies = () => {

  const dispatch = useDispatch();
  const moviesStore = useSelector((state: RootState) => state.movies);

  const getData = async () => {
   await fetchMoviesAction(dispatch);
  }

  useEffect(() => {
    if (!moviesStore.movies.length) getData().then();
  }, []);
}
