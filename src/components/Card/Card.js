import LikeButton from '../LikeButton';
import styles from './Card.module.css';
import CreationDate from './CreationDate/CreationDate';
import Byline from './Byline/Byline';
import Title from './Title/Title';

const Card = (props) => {
  return (
    <li className={styles.cardItems}>
      <div className={styles.Wrap}>
        <Title
          title={props.article.headline}
          index={props.index}
        />
        <LikeButton />
      </div>
      <div className={styles.Wrap}>
        <Byline byline={props.article.byline.original} />
        <CreationDate pub_date={props.article.pub_date} />
      </div>
    </li>
  );
};

export default Card;
