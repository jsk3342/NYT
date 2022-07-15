import styles from './LikeButton.module.css';
import starEmpty from '../assets/star-empty.png';
import starFill from '../assets/star-fill.png';
import { useState } from 'react';

const LikeButton = () => {
  const [star, setStar] = useState(starEmpty);

  const HandleStar = () => {
    if (star === starEmpty) {
      setStar(starFill);
    } else setStar(starEmpty);
  };

  return (
    <div>
      <button className={styles.likeButton} type="button" onClick={HandleStar}>
        <img src={star} alt="빈 좋아요 버튼" />
      </button>
    </div>
  );
};

export default LikeButton;
