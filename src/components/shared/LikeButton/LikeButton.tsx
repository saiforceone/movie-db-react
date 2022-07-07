import {FC} from 'react';
import {IoHeart, IoHeartDislike} from 'react-icons/all';
import "./LikeButton.css";

interface LikeButtonProps {
  action: () => void;
  liked: boolean;
}

export const LikeButton: FC<LikeButtonProps> = ({action, liked}) => {
  return (
    <button className={["like-button", liked ? "like-button_liked" : ""].join(' ')} onClick={action}>
      {liked ? <IoHeartDislike className="like-button__icon_base"/> : <IoHeart className="like-button__icon_base"/>}
    </button>
  )
};
