import React, {useCallback, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PageHeader} from '../../../components/Nav/PageHeader/PageHeader';
import {RootState} from '../../../dataStore';
import {MovieCard} from '../../../components/Movie/MovieCard/MovieCard';
import {toggleLike} from '../../../dataStore/slices/movieSlice';
import {EmptyCard} from '../../../components/shared/EmptyCard/EmptyCard';
import {Movie} from '../../../types/MovieTypes';
import {MovieDetailModal} from '../../../components/Movie/MovieDetailModal/MovieDetailModal';

export const LikedMoviesPage = () => {

  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);

  const dispatch = useDispatch();
  const moviesStore = useSelector((state: RootState) => state.movies);

  const likedMovies = useMemo(() => {
    return moviesStore.movies.filter(movie => movie.liked);
  }, [moviesStore.movies]);

  const selectMovie = useCallback((movie: Movie) => {
    setSelectedMovie(movie);
    setDetailModalVisible(true);
  }, [moviesStore]);

  const unsetMovieAndClose = useCallback(() => {
    setSelectedMovie(undefined);
    setDetailModalVisible(false)
  }, [selectedMovie, detailModalVisible]);

  return (
    <div className="page">
      <PageHeader title="Liked Movies"/>
      {likedMovies.length ?
        (
          <div className="page--grid">
            {likedMovies.map(movie => <MovieCard
              key={`liked movie ${movie.title} (${movie.id})`}
              likeAction={() => dispatch(toggleLike(movie.id))}
              selectAction={() => selectMovie(movie)}
              movie={movie}/>)}
          </div>
        )
        : <EmptyCard/>
      }
      {selectedMovie &&
        <MovieDetailModal
          movie={selectedMovie}
          onClose={() => unsetMovieAndClose()}
          visible={detailModalVisible}
        />
      }
    </div>
  );
};
