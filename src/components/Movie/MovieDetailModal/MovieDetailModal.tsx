import {FC} from 'react';
import Modal from 'react-modal';
import {Movie} from '../../../types/MovieTypes';
import './MovieDetailModal.css';
import {MovieRating} from '../MovieRating/MovieRating';
import {MovieRelease} from '../MovieRelease/MovieRelease';
import FormatUtils from '../../../Utils/FormatUtils';

const MOVIE_POSTER_BASE_URL = import.meta.env.VITE_MOVIE_POSTER_BASE_URI;
Modal.setAppElement('#root');

interface MovieDetailModalProps {
  movie: Movie;
  onAfterClose?: () => void;
  onClose: () => void;
  visible: boolean;
}

export const MovieDetailModal: FC<MovieDetailModalProps> = ({movie, onClose, visible}) => {
  return (
    <div>
      <Modal
        contentLabel={`Movie Details: ${movie.title}`}
        isOpen={visible}
        onRequestClose={onClose}
      >
        <div className="movie-detail-modal">
          <div className="movie-detail-modal__poster_container">
            <img
              alt={`movie modal poster ${movie.title} (${movie.id})`}
              className="movie-detail-modal__poster_image"
              src={`${MOVIE_POSTER_BASE_URL}${movie.poster_path}`}
            />
          </div>
          <div className="movie-detail-modal__content">
            <h1 className="movie-detail-modal__title">{movie.title}</h1>
            <p className="movie-detail-modal__overview">{movie.overview}</p>
            <div className="flex justify-between py-3">
              <div>
                <MovieRating averageRating={movie.vote_average} totalVotes={movie.vote_count} />
              </div>
              <div className="flex self-end">
                <MovieRelease releaseDate={FormatUtils.formatDateString(movie.release_date)} />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
