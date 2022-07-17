import LikeButton from '../LikeButton';
import styles from './Card.module.css';
import CreationDate from './CreationDate/CreationDate';
import Byline from './Byline/Byline';
import Title from './Title/Title';
import { useSelector} from 'react-redux';

const Card = (props) => {
  // const state = useSelector(state => state.getArticleSlice)

  return (
    <li className={styles.cardItems}>
      <div className={styles.Wrap}>
        <Title title={props.article.headline} index={props.index} />
        <LikeButton star={props.star} />
      </div>
      <div className={styles.Wrap}>
        <Byline byline={props.article.byline.original} />
        <CreationDate pub_date={props.article.pub_date} />
      </div>
    </li>
  );
};

export default Card;
