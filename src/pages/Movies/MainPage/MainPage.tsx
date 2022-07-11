import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../dataStore';
import {useMovies} from '../../../dataStore/helpers/useMovies';
import {MovieCard} from '../../../components/Movie/MovieCard/MovieCard';
import {toggleLike} from '../../../dataStore/slices/movieSlice';
import {PageHeader} from '../../../components/Nav/PageHeader/PageHeader';
import {EmptyCard} from '../../../components/shared/EmptyCard/EmptyCard';
import {fetchMoviesAction} from '../../../dataStore/actions/movieActions';
import {MovieDetailModal} from '../../../components/Movie/MovieDetailModal/MovieDetailModal';
import {Movie} from '../../../types/MovieTypes';

export const MainPage = () => {

  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);

  const dispatch = useDispatch();
  const moviesStore = useSelector((state: RootState) => state.movies);

  useMovies();

  const execReload = useCallback(() => {
    fetchMoviesAction(dispatch).then()
  }, []);

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
      <PageHeader
        actions={<>
          <button
            className="default-button"
            disabled={moviesStore.isFetching}
            onClick={execReload}
          >
            {moviesStore.isFetching ? 'Loading...' : 'Reload'}
          </button>
        </>}
        title="Movies"
      />
      {moviesStore.movies.length ?
        <div className="page--grid">
          {moviesStore.movies.map(movie => <MovieCard
            key={`movie-${movie.id}`}
            likeAction={() => dispatch(toggleLike(movie.id))}
            movie={movie}
            selectAction={() => selectMovie(movie)}
          />)}
        </div> : <EmptyCard/>
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
