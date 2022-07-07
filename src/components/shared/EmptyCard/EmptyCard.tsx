import {IoInformationCircle} from 'react-icons/all';
import './EmptyCard.css';

export const EmptyCard = () => {
  return (
    <div className="empty-card">
      <IoInformationCircle className="empty-card__icon" />
      <div className="empty-card__content">
        <h1 className="content__title">No Results Found</h1>
      </div>
    </div>
  );
};
