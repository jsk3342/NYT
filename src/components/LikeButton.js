import styles from './LikeButton.module.css';
import starEmpty from '../assets/star-empty.png';

const LikeButton = () => {
  return (
    <button className={styles.likeButton} type="button">
      <img src={starEmpty} alt="빈 좋아요 버튼" />
    </button>
  );
};

export default LikeButton;
