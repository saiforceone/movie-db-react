import {FC} from 'react';
import {IoRocket} from 'react-icons/all';
import './MovieRelease.css';

interface MovieReleaseProps {
  releaseDate: string;
}

export const MovieRelease: FC<MovieReleaseProps> = ({releaseDate}) => {
  return (
    <div className="movie-release">
      <IoRocket className="movie-release__icon" />
      <span className="movie-release__date">{releaseDate}</span>
    </div>
  );
};
