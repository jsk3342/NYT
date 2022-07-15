import LikeButton from '../LikeButton';
import styles from './Card.module.css';
import CreationDate from './CreationDate/CreationDate';
import SubTitle from './SubTitle/SubTitle';
import Title from './Title/Title';

const Card = () => {
  return (
    <li className={styles.cardItems}>
      <div className={styles.Wrap}>
        <Title />
        <LikeButton />
      </div>
      <div className={styles.Wrap}>
        <SubTitle />
        <CreationDate />
      </div>      
    </li>
  );
};

export default Card;
