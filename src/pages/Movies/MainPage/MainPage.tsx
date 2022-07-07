import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../dataStore';
import {useMovies} from '../../../dataStore/helpers/useMovies';
import {MovieCard} from '../../../components/Movie/MovieCard/MovieCard';
import {toggleLike} from '../../../dataStore/slices/movieSlice';
import {PageHeader} from '../../../components/Nav/PageHeader/PageHeader';
import {EmptyCard} from '../../../components/shared/EmptyCard/EmptyCard';

export const MainPage = () => {
  const dispatch = useDispatch();
  const moviesStore = useSelector((state: RootState) => state.movies);
  useMovies();
  return (
    <div className="page">
      <PageHeader title="Movies"/>
      {moviesStore.movies.length ?
        <div className="page--grid">
          {moviesStore.movies.map(movie => <MovieCard
            key={`movie-${movie.id}`}
            likeAction={() => dispatch(toggleLike(movie.id))}
            movie={movie}
          />)}
        </div> : <EmptyCard/>
      }
    </div>
  );
};
