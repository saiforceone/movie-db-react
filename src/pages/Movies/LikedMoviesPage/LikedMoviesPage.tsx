import {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PageHeader} from '../../../components/Nav/PageHeader/PageHeader';
import {RootState} from '../../../dataStore';
import {MovieCard} from '../../../components/Movie/MovieCard/MovieCard';
import {toggleLike} from '../../../dataStore/slices/movieSlice';

export const LikedMoviesPage = () => {

  const dispatch = useDispatch();
  const moviesStore = useSelector((state: RootState) => state.movies);

  const likedMovies = useMemo(() => {
    return moviesStore.movies.filter(movie => movie.liked);
  }, [moviesStore.movies]);

  return (
    <div className="page">
      <PageHeader title="Liked Movies"/>
      <div className="page--grid">
        {likedMovies.map(movie => <MovieCard
          key={`liked movie ${movie.title} (${movie.id})`}
          likeAction={() => dispatch(toggleLike(movie.id))}
          movie={movie}/>)}
      </div>
    </div>
  );
};
