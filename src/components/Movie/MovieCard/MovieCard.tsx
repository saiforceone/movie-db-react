import {FC} from 'react';
import './MovieCard.css';
import {Movie} from '../../../types/MovieTypes';
import {LikeButton} from '../../shared/LikeButton/LikeButton';
import {MovieRating} from '../MovieRating/MovieRating';
import {MovieRelease} from '../MovieRelease/MovieRelease';
import FormatUtils from '../../../Utils/FormatUtils';

const MOVIE_POSTER_BASE_URL = import.meta.env.VITE_MOVIE_POSTER_BASE_URI;

interface MovieCardProps {
  likeAction: () => void;
  movie: Movie;
}

export const MovieCard: FC<MovieCardProps> = ({
  likeAction,
  movie
}) => {
  return (
    <div className="movie-card">
      {movie.poster_path && (
        <img alt={`movie poster ${movie.title} (${movie.id})`} className="movie-poster" src={`${MOVIE_POSTER_BASE_URL}${movie.poster_path}`} />
      )}
      <div className="movie-content">
        <h1 className="movie-content__title">{movie.title}</h1>
        <p className="movie-content__overview">{movie.overview}</p>
        <MovieRating averageRating={movie.vote_average} totalVotes={movie.vote_count} />
        <MovieRelease releaseDate={FormatUtils.formatDateString(movie.release_date)} />
        <LikeButton action={() => likeAction()} liked={movie.liked} />
      </div>
    </div>
  );
};
