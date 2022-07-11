import {FC} from 'react';
import {IoStar} from 'react-icons/all';
import './MovieRating.css';

interface MovieRatingProps {
  averageRating: number;
  totalVotes: number;
}

export const MovieRating: FC<MovieRatingProps> = ({averageRating, totalVotes}) => {
  return (
    <div className="movie-rating">
      <IoStar className="movie-rating__icon"/>
      <div className="movie-rating__value">
        <span className="movie-rating__value_text">
          {averageRating}<span className="movie-rating__value_total">({totalVotes})</span>
        </span>
      </div>
    </div>
  );
};
