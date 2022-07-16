import fileIcon from '../../../assets/file-text.png';
import styles from './EmptyScrap.module.css';
import { Link } from 'react-router-dom';

function EmptyScrap() {
  return (
    <section className={styles.emptyScrap}>
      <img className={styles.fileIcon} src={fileIcon} alt="서류 아이콘" />
      <p>저장된 스크랩이 없습니다.</p>
      <Link to={'/NYT'}>
        {
          <button className={styles.button} type="button">
            스크랩 하러 가기
          </button>
        }
      </Link>
    </section>
  );
}

export default EmptyScrap;
